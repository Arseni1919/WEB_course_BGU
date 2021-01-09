from flask import Blueprint, render_template

# users blueprint definition
users = Blueprint('users', __name__,
                  static_folder='static',
                  static_url_path='/users',
                  template_folder='templates')


# Routes
@users.route('/users')
def index():
    return render_template('users.html')


@users.route('/users_me')
def index_me():
    return 'users'
