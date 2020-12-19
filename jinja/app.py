from flask import Flask, render_template
from pages.about.about import about

app = Flask(__name__)
app.register_blueprint(about)


@app.route('/')
def index():
    # return render_template('users.html')
    return render_template('customers.html',
                           curr_user={'firstname': "Ariel", 'lastname': "Perchik"},
                           hobbies=['Prog', 'Paint'],
                           degree=('B.Sc', 'M.Sc'))


# @app.route('/about')
# def about():
#     return render_template('about.html')


if __name__ == '__main__':
    app.run(debug=True)
