
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image

class Detect:
    def __init__(self,filename):
        self.filename = filename
        print(self.filename)
        self.model = load_model("vgg16_model.h5")
        print(self.model.summary())

    def predictiondogcat(self):
        imagename = self.filename
        test_image = image.load_img(imagename, target_size = (224,224))
        test_image = image.img_to_array(test_image) / 255
        test_image = np.expand_dims(test_image, axis = 0)
        result = self.model.predict(test_image)
        print(result)
        return result


