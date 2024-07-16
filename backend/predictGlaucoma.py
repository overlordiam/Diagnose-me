import base64
from google.cloud import aiplatform
from google.cloud.aiplatform.gapic.schema import predict

def predict_image_classification_sample(
    project: str,
    endpoint_id: str,
    filename: str,
    location: str = "us-central1",
    api_endpoint: str = "us-central1-aiplatform.googleapis.com",
):
    """
    Perform image classification prediction using Google Cloud AI Platform.
    
    Parameters:
    project (str): Google Cloud project ID.
    endpoint_id (str): ID of the deployed model endpoint.
    filename (str): Path to the image file.
    location (str): Region of the endpoint.
    api_endpoint (str): API endpoint URL.
    
    Returns:
    dict: Prediction results.
    """
    client_options = {"api_endpoint": api_endpoint}
    client = aiplatform.gapic.PredictionServiceClient(client_options=client_options)
    
    # Read and encode the image file
    with open(filename, "rb") as f:
        file_content = f.read()
    encoded_content = base64.b64encode(file_content).decode("utf-8")
    
    # Prepare the instance and parameters for prediction
    instance = predict.instance.ImageClassificationPredictionInstance(
        content=encoded_content,
    ).to_value()
    instances = [instance]
    parameters = predict.params.ImageClassificationPredictionParams(
        confidence_threshold=0.5, max_predictions=5,
    ).to_value()
    
    endpoint = client.endpoint_path(
        project=project, location=location, endpoint=endpoint_id
    )
    
    # Perform the prediction
    response = client.predict(
        endpoint=endpoint, instances=instances, parameters=parameters
    )
    
    # Print the response
    print("response")
    print(" deployed_model_id:", response.deployed_model_id)
    predictions = response.predictions
    for prediction in predictions:
        print(" prediction:", dict(prediction))
    
    return dict(prediction)

# Test the prediction function
result = predict_image_classification_sample(
    project="932347768861",
    endpoint_id="5277189620394622976",
    location="us-central1",
    filename="backend/_0_343.jpg"
)

print(result)
