from flask import Flask, jsonify, request
import logging
app = Flask(__name__)

@app.route('/',methods = ['POST', 'GET'])
def login():
    if request.method == 'POST':
        f = open ('salida.txt','wb')
        f.write(str(request.form).encode())
        f.close()        
        
        return 200

if __name__ == '__main__':
   app.run(debug = True)

