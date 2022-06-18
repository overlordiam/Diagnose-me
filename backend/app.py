
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


@app.route("/", methods=['GET'])
@cross_origin()
def home():
    return {
        "res": "working"
    }


@app.route("/predict", methods=['POST'])
@cross_origin()
def predictRoute():
    pathOfImage = "images"
    if not os.path.isdir(pathOfImage):
        os.mkdir(pathOfImage)
    target=os.path.join(pathOfImage,'image.png')
    print("hello")
    file = request.files.get('file')
    print(file)
    file.save(target)
    clApp = ClientApp()
    result = clApp.classifier.predictiondogcat()
    return jsonify(result)


if __name__ == "__main__":
    print("working")
    app.run(port=5000, debug=True)
