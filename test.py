from flask import Flask, render_template, request, jsonify
import pickle
import numpy as np

pt = pickle.load(open("pt.pkl", "rb"))

similarity_scores = pickle.load(open("similarity_scores.pkl", "rb"))



def recommendx(prod):
    index = np.where(pt.index == prod)[0][0]
    similar_items = sorted(list(enumerate(similarity_scores[index])), key=lambda x: x[1], reverse=True)[1:5]

    recommended_products = []
    for i in similar_items:
        product = pt.index[i[0]]
        recommended_products.append(product)
    
    return recommended_products

recommended_products = recommendx('HP Laptop')
print("Recommended Products:")
for product in recommended_products:
    print(product)


