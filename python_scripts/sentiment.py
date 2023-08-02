from transformers import pipeline

def allClear(review):
    sentiment_pipeline = pipeline("sentiment-analysis")
    data = review
    result = sentiment_pipeline(data)
    return{"result": result}