from flask import Flask, redirect, url_for, render_template
app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template('index.html', name='ARSENI', title="Homepage")


# @app.route('/logout')
@app.route('/home', methods=['GET', 'POST'])
def hello_home():
    return redirect(url_for('hello_world'))


if __name__ == '__main__':
    app.run(debug=True)




