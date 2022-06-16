
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image

class detect:
    def __init__(self,filename):
        self.filename = filename


    def predictiondogcat(self):
        # load model
        model = load_model('vgg16_model.h5')
        MODEL_PATH = 'https://cdn.glitch.global/dd712284-b4e7-4ec9-9ea8-bdc54ab34cdb/model.json?v=1655154748644'
        model = tf.loadLayersModel(MODEL_PATH)
        model.summary();       
        print(filename.data)

        # summarize model
        model.summary()
        imagename = self.filename
        test_image = image.load_img(imagename, target_size = (224,224,3))
        test_image = image.img_to_array(test_image)
        test_image = np.expand_dims(test_image, axis = 0)
        result = model.predict(test_image)
        print(result)

        # if result[0][0] == 1:
        #     prediction = 'dog'
        #     return [{ "image" : prediction}]
        # else:
        #     prediction = 'cat'
        #     return [{ "image" : prediction}]


