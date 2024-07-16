from flask import Flask, request, jsonify
import os
from flask_cors import CORS, cross_origin
from predict import Detect
from predictGlaucoma import predict_image_classification_sample

# Set environment variables for locale
os.putenv('LANG', 'en_US.UTF-8')
os.putenv('LC_ALL', 'en_US.UTF-8')

app = Flask(__name__)
CORS(app)

class ClientApp:
    def __init__(self):
        self.filename = "images/image.png"
        self.classifier = Detect(self.filename)

@app.route("/", methods=['GET'])
@cross_origin()
def home():
    """
    Home route to check if the server is running.
    """
    return {"res": "working"}

@app.route("/predictDR", methods=['POST'])
@cross_origin()
def predictRouteDR():
    """
    Route to handle Diabetic Retinopathy prediction.
    """
    pathOfImage = "images"
    if not os.path.isdir(pathOfImage):
        os.mkdir(pathOfImage)
    target = os.path.join(pathOfImage, 'image.png')
    
    # Save the uploaded image
    file = request.files.get('file')
    print(file)
    file.save(target)
    
    # Perform the prediction
    clApp = ClientApp()
    result = clApp.classifier.predictiondogcat()
    print(result)
    return jsonify(result)

@app.route("/predictGlaucoma", methods=['POST'])
@cross_origin()
def predictRouteGlaucoma():
    """
    Route to handle Glaucoma prediction using Google Cloud AI Platform.
    """
    pathOfImage = "GlaucomaImages"
    if not os.path.isdir(pathOfImage):
        os.mkdir(pathOfImage)
    target = os.path.join(pathOfImage, 'image.png')
    
    # Save the uploaded image
    file = request.files.get('file')
    print(file)
    file.save(target)
    
    # Perform the prediction
    result = predict_image_classification_sample(
        project="932347768861",
        endpoint_id="5581182595242131456",
        location="us-central1",
        filename=target
    )
    
    # Prepare the response
    response = {'displayNames': result.get('displayNames', [])}
    print(response)
    return jsonify(response)

if __name__ == "__main__":
    print("working")
    app.run(port=5000, debug=True)
