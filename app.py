from flask import Flask, render_template, request
import numpy as np
import csv
import os

app = Flask(__name__)

# Load the preprocessed data and cosine similarity matrix
data = []
pt = []
popular_products = []

with open("data.csv", "r") as csv_file:
    csv_reader = csv.DictReader(csv_file)
    for row in csv_reader:
        data.append(row)

with open("pt.csv", "r") as csv_file:
    pt = np.loadtxt(csv_file, delimiter=',', dtype=str)

with open("popular.csv", "r") as csv_file:
    csv_reader = csv.DictReader(csv_file)
    for row in csv_reader:
        popular_products.append(row)

# Load the cosine similarity matrix
similarity = np.loadtxt("similarity.txt", delimiter=',')
similarity_scores = np.loadtxt("similarity_scores.txt", delimiter=',')

def recommend(product):
    prod_ind = next((i for i, item in enumerate(data) if item["Product"] == product), None)
    if prod_ind is not None:
        distances = similarity[prod_ind]
        similar_list = sorted(enumerate(distances), reverse=True, key=lambda x: x[1])[1:4]
        recommended_products = [data[i[0]]["Product"] for i in similar_list]
        return recommended_products
    return []

def recommendx(prod):
    index = np.where(pt == prod)[0][0]
    similar_items = sorted(
        list(enumerate(similarity_scores[index])),
        key=lambda x: x[1], reverse=True
    )

    recommended_products = []
    count = 0  # To keep track of recommended products
    for i in similar_items:
        if pt[i[0]] != prod:  # Exclude the input product
            recommended_products.append(pt[i[0]])
            count += 1
            if count >= 3:  # Get 3 recommendations
                break

    return recommended_products

@app.route("/")
def hello_world():
    return render_template("login.html")

database = {"user1": {"password": "123", "last_viewed": 'HP Pavilion'},
            "user2": {"password": "234", "last_viewed": 'Lenovo IdeaPad'},
            "user3": {"password": "567", "last_viewed": 'Xiaomi 12 Pro 5G'}}

@app.route("/form_login", methods=["POST", "GET"])
def login():
    name = request.form["username"]
    pwd = request.form["password"]
    if name not in database:
        return render_template("login.html", info="Invalid User")
    else:
        if database[name]["password"] != pwd:
            return render_template("login.html", info="Invalid Password")
        else:
            product = database[name]["last_viewed"]
            user_last_viewed = recommend(product)
            return render_template(
                "home.html",
                popular_products=list(item["Product"] for item in popular_products),
                last_viewed=user_last_viewed, product=product, name=name
            )

@app.route("/home", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        product_name = request.form["product_name"]
        recommended_products = recommend(product_name)
        extra_recommended_products = recommendx(product_name)

        user_name = request.form["username"]  # Get the logged-in user's name
        last_viewed_product = database[user_name]["last_viewed"]

        return render_template(
            "after.html",
            data=recommended_products,
            data1=product_name,
            extra_data=extra_recommended_products,
            last_viewed=last_viewed_product,
        )
    return render_template("home.html")

@app.route("/recommend/<product>", methods=["GET"])
def show_recommendations(product):
    recommended_products = recommend(product)
    extra_recommended_products = recommendx(product)
    return render_template(
        "after.html",
        data=recommended_products,
        data1=product,
        extra_data=extra_recommended_products,
    )

if __name__ == "__main__":
    app.run(debug=True)
