from flask import Flask, redirect, url_for, request
app = Flask(__name__)



@app.route('/',methods = ['POST', 'GET'])
def login():

    if request.method == 'POST':
        f = open ('salida.txt','wb')
        f.write(request.form.get(""))
        f.close()
        return 200
    


if __name__ == '__main__':
   app.run(debug = True)

