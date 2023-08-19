from flask import Flask, render_template, request, jsonify
import joblib as joblib
import numpy as np
app = Flask(__name__)

# Load the preprocessed data and cosine similarity matrix from pickle.pkl
data = joblib.load("pickle.pkl")
pt = joblib.load("pt.pkl")
popular_products = joblib.load("popular.pkl")

# Load the cosine similarity matrix from the pickle
similarity = joblib.load("similarity.pkl")
similarity_scores = joblib.load("similarity_scores.pkl")

def recommend(product):
    prod_ind = data[data["Product"] == product].index[0]
    distances = similarity[prod_ind]
    similar_list = sorted(enumerate(distances), reverse=True, key=lambda x: x[1])[1:4]
    recommended_products = [data.iloc[i[0]]["Product"] for i in similar_list]

    return recommended_products

def recommendx(prod):
    index = np.where(pt.index == prod)[0][0]
    similar_items = sorted(
        list(enumerate(similarity_scores[index])), key=lambda x: x[1], reverse=True
    )

    recommended_products = []
    count = 0  # To keep track of recommended products
    for i in similar_items:
        if pt.index[i[0]] != prod:  # Exclude the input product
            recommended_products.append(pt.index[i[0]])
            count += 1
            if count >= 3:  # Get 3 recommendations
                break

    return recommended_products

@app.route("/")
def hello_world():
    return render_template("login.html")

database = {"user1": "123", "user2": "234", "user3": "567"}

@app.route("/form_login", methods=["POST", "GET"])
def login():
    name = request.form["username"]
    pwd = request.form["password"]
    if name not in database:
        return render_template("login.html", info="Invalid User")
    else:
        if database[name] != pwd:
            return render_template("login.html", info="Invalid Password")
        else:
            return render_template(
                "home.html",
                popular_products=list(popular_products["Product"].values),
            )

@app.route("/home", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        product_name = request.form["product_name"]
        recommended_products = recommend(product_name)
        extra_recommended_products = recommendx(product_name)
        return render_template(
            "after.html",
            data=recommended_products,
            data1=product_name,
            extra_data=extra_recommended_products,
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
