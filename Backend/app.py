from flask import Flask, redirect, url_for, request
app = Flask(__name__)



@app.route('/',methods = ['POST', 'GET'])
def login():

    if request.method == 'POST':
        temp =request.form.get("")
        return "%s" %str(temp)
    else:
        return str(temp)


if __name__ == '__main__':
   app.run(debug = True)

