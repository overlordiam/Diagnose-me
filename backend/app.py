
from flask import Flask, request, jsonify, json
import os
from flask_cors import CORS, cross_origin
from predict import Detect
# from predictGlaucoma import predict_image_classification_sample

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
    print(result)
    return jsonify(result)

# @app.route("/predictGlaucoma", methods=['POST'])
# @cross_origin()
# def predictRoute():
#     pathOfImage = "GlaucomaImages"
#     if not os.path.isdir(pathOfImage):
#         os.mkdir(pathOfImage)
#     target=os.path.join(pathOfImage,'image.png')
#     print("hello")
#     file = request.files.get('file')
#     print(file)
#     file.save(target)
#     result = predict_image_classification_sample(
#     project="932347768861",
#     endpoint_id="5109219428042539008",
#     location="us-central1",
#     filename="_0_343.jpg"
# )
#     print(result)
#     return jsonify(result)


if __name__ == "__main__":
    print("working")
    app.run(port=5000, debug=True)
