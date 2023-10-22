from transformers import pipeline

def allClear(review):
    sentiment_pipeline = pipeline("sentiment-analysis")
    data = review
    result = sentiment_pipeline(data)
    return{"result": result}


# # Import required libraries
# from transformers import BertForSequenceClassification, BertTokenizer
# import torch
# import pandas as pd
# from sklearn.model_selection import train_test_split

# # Load pre-trained model and tokenizer
# model_name = 'bert-base-uncased'
# model = BertForSequenceClassification.from_pretrained(model_name, num_labels=5)
# tokenizer = BertTokenizer.from_pretrained(model_name)

# # Load and preprocess data
# data = pd.read_csv('amazon_reviews.csv')
# data['label'] = data['star_rating'] - 1

# train_data, test_data = train_test_split(data, test_size=0.2, random_state=42)

# train_texts = train_data['review_text'].tolist()
# train_labels = train_data['label'].tolist()

# test_texts = test_data['review_text'].tolist()
# test_labels = test_data['label'].tolist()

# # Tokenize and preprocess data
# train_encodings = tokenizer(train_texts, truncation=True, padding=True, return_tensors='pt', max_length=128)
# test_encodings = tokenizer(test_texts, truncation=True, padding=True, return_tensors='pt', max_length=128)

# train_labels = torch.tensor(train_labels)
# test_labels = torch.tensor(test_labels)

