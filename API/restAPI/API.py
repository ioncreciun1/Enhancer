from flask import Flask,jsonify,request
from flask_cors import CORS
import convertor
import base64


app = Flask(__name__)
#cors = CORS(app, resources={r"/image/*": {"origins": "*"}})


    



@app.route("/image/<string:encoded>")
def getColorfulImage(encoded:str):

    encoded = encoded.replace("-", "/")
    response = jsonify(message=convertor.getImage(encoded))
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Methods", "*")
    return response



if __name__ =='__main__':
    app.run(port='8080')


