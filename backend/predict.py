import numpy as np
import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image

class Detect:
    def __init__(self, filename):
        """
        Initialize the detector with the given image file.
        
        Parameters:
        filename (str): Path to the image file.
        """
        self.filename = filename
        print(self.filename)
        
        # Load the pre-trained model
        self.model = load_model("vggnew.h5")
        print(self.model.summary())

    def predictiondogcat(self):
        """
        Predict if the image is a dog or a cat.
        
        Returns:
        int: Index of the predicted class (0 or 1).
        """
        imagename = self.filename
        
        # Load and preprocess the image
        test_image = image.load_img(imagename, target_size=(224, 224))
        test_image = image.img_to_array(test_image) / 255.0
        test_image = np.expand_dims(test_image, axis=0)
        
        # Perform the prediction
        result = self.model.predict(test_image).tolist()
        print(result[0])
        
        return result[0].index(max(result[0]))
