from transformers import pipeline
# sentiment_pipeline = pipeline("sentiment-analysis")
# data = ["I love you", "I hate you"]
# sentiment_pipeline(data)

def allClear(review):
    sentiment_pipeline = pipeline("sentiment-analysis")
    data = review
    result = sentiment_pipeline(data)
    print('SENTIMENT RESULT:', result)
    return{"result": result}