# from flask import Flask, send_from_directory
# from flask_restful import Api, Resource, reqparse
# from flask_cors import CORS #comment this on deployment
# from api.HelloApiHandler import HelloApiHandler
# from predict import Detect

# app = Flask(__name__, static_url_path='', static_folder='frontend/build')
# CORS(app) #comment this on deployment
# api = Api(app)

# @app.route("/", defaults={'path':''})
# def serve(path):
#     return send_from_directory(app.static_folder,'index.html')

# @app.route("/predict", methods=['POST'])
# def predictRoute():
#     image = request.json['image']
#     decodeImage(image, clApp.filename)
#     result = clApp.classifier.predictiondogcat()
#     return jsonify(result)

# api.add_resource(HelloApiHandler, '/flask/hello')
# api.add_resource(Detect, '/predict')

from flask import Flask, request, jsonify
import os
from flask_cors import CORS, cross_origin
from utils.utils import decodeImage
from predict import Detect

os.putenv('LANG', 'en_US.UTF-8')
os.putenv('LC_ALL', 'en_US.UTF-8')

app = Flask(__name__)
CORS(app)


# @cross_origin()
class ClientApp:
    def __init__(self):
        self.filename = "images/image.png"
        self.classifier = Detect(self.filename)


# @app.route("/", methods=['GET'])
# @cross_origin()
# def home():
#     return render_template('index.html')


@app.route("/predict", methods=['POST'])
@cross_origin()
def predictRoute():
    # image = request.json['image']
    pathOfImage = "images"
    if not os.path.isdir(pathOfImage):
        os.mkdir(pathOfImage)
    target=os.path.join(pathOfImage,'image.png')

    file = request.files['file']
    base64 = request.files['base64']
    file.save(target)
    clApp = ClientApp()
    # decodeImage(base64, clApp.filename)
    result = clApp.classifier.predictiondogcat()
    return jsonify(result)


# port = int(os.getenv("PORT"))
if __name__ == "__main__":
    print("working")
    # app.run(host='0.0.0.0', port=port)
    app.run(host='0.0.0.0', port=5000, debug=True)
