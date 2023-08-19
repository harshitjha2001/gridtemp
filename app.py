from flask import Flask, render_template, request, jsonify
import pickle
import numpy as np

app = Flask(__name__)

with open("pickle.pkl", "rb") as f:
    data = pickle.load(f)

with open("pt.pkl", "rb") as f:
    pt = pickle.load(f)

with open("popular.pkl", "rb") as f:
    popular_products = pickle.load(f)

# Load the cosine similarity matrix from the pickle
with open("similarity.pkl", "rb") as f:
    similarity = pickle.load(f)

with open("similarity_scores.pkl", "rb") as f:
    similarity_scores = pickle.load(f)

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

database = {"user1": {"password": "123", "last_viewed": 'HP Pavilion' },
            "harshit": {"password": "234", "last_viewed": 'realme Buds Air 3 Neo'},
            "himanshu": {"password": "567", "last_viewed": 'Xiaomi 12 Pro 5G'}}


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
                popular_products=list(popular_products["Product"].values),
                last_viewed=user_last_viewed,product=product,name=name
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
