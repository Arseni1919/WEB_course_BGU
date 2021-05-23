from flask import Flask


###### App setup
app = Flask(__name__)

app.config.from_pyfile('settings.py')

###### Pages
## Homepage
from pages.homepage.homepage import homepage
app.register_blueprint(homepage)

## About
from pages.about.about import about
app.register_blueprint(about)

## Events
from pages.events.events import events
app.register_blueprint(events)

## Users
from pages.users.users import users
app.register_blueprint(users)

## Products
from pages.products.products import products
app.register_blueprint(products)

## Catalog
from pages.catalog.catalog import catalog
app.register_blueprint(catalog)

## Page error handlers
# from pages.page_error_handlers.page_error_handlers import page_error_handlers
# app.register_blueprint(page_error_handlers)


###### Components
## Main menu
from components.main_menu.main_menu import main_menu
app.register_blueprint(main_menu)


# @app.route('/info')
# def info():
#     u =  app.url_map
#     return repr(u)


if __name__ == '__main__':
    app.run(debug=True)
