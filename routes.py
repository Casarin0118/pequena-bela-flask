from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/contato')
def contato():
    return render_template('contato.html')

@app.route('/entrega')
def entrega():
    return render_template('entrega.html')

@app.route('/produtos')
def produtos():
    return render_template('produtos.html')

if __name__ == '__main__':
    app.run(debug=True)
