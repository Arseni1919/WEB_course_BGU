from flask import Flask, request, render_template, url_for, redirect, session, jsonify

# import mysql.connector
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/catalog', methods=['GET', 'POST'])
def catalog():
    if 'name' in request.args:
        name = request.args['name']
        email = request.args['email']
        return render_template('catalog.html', name=name, email=email)
    return render_template('catalog.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        print(request.method)
        name = request.form['name']
        session['name'] = name
        session['login'] = True
        print(session)
        email = request.form['email']
        # user = dbManager.fetch("SELECT * FROM users WHERE username=%s AND password=%s", (uname, password))
        # if user and len(user):
        #   return render_template(url_for('index'))
        return redirect(url_for('index'))
    return render_template('login.html')


@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('index'))


@app.route('/profile')
@app.route('/profile/<int:user_id>/')
def profile(user_id=None):
    if user_id:
        return render_template('profile.html', user_id=user_id)
    return render_template('profile.html')


@app.route('/user/<user_id>/')
def user(user_id=None):
    if user_id:
        return jsonify({
            'success': True,
            'user_data': user_id,
        })
    return jsonify({
        'success': False,
    })


@app.route('/products', defaults={'sku': 100.203})
@app.route('/products/<float:sku>')
def products(sku):
    return 'SKU is: %s' % sku


@app.route('/product/<float:sku>')
def product(sku):
    return redirect(url_for('products', sku=sku))

# @app.route('/users')
# def users():
#     con = mysql.connector.connect('example.db')
#     data = con.cursor().execute('SELECT * FROM users').fetchall()
#     con.close()
#     # Do something with data
#     return 'Got all users'


# @app.route('/users/<int:user_id>')
# def users(user_id):
#     con = mysql.connector.connect('example.db')
#     con.execute('...')
#     con.commit()
#     con.close()
#
#     return 'Success'

if __name__ == '__main__':
    app.secret_key = '123'
    app.run(debug=True)

    # dbManager = []
    #
    # query_result = dbManager.fetch('SELECT * FROM users')
    # query_result = dbManager.fetch('SELECT * FROM users WHERE username = %s', (request.form['username']))

# {
#     {'id': 1, 'first_name': 'Ariel'},
#     {'id': 2, 'first_name': 'Tamar'},
#     {'id': 3, 'first_name': 'Eran'},
#     ...
# }
#
# {'id': 1, 'first_name': 'Ariel'},
