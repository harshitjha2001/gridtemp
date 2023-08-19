import pandas as pd
import random

# List of products and users
products = [
    'HP Laptop', 'Samsung Mobile', 'Dell Laptop', 'Apple Mobile', 'Lenovo Laptop',
    'Xiaomi Mobile', 'Acer Laptop', 'OnePlus Mobile', 'MSI Laptop', 'Google Pixel Mobile',
    'Asus Laptop', 'Sony Mobile', 'LG Mobile', 'Samsung Laptop', 'Beats Headphones',
    'Microsoft Surface Laptop', 'Google Pixel Buds', 'OnePlus Bullets Wireless',
    'Sony Xperia Mobile', 'Apple iPhone', 'Samsung Galaxy Buds', 'Xiaomi Redmi Mobile',
    'Jabra Wireless Headset', 'ASUS ROG Laptop', 'Logitech Bluetooth Mouse'
]

users = [1, 2, 3, 4, 5]

# Generate random ratings between 0 and 5
ratings_data = []
for user in users:
    for product in products:
        rating = random.uniform(0, 5)
        ratings_data.append((user, product, rating))

# Create a DataFrame
ratings_df = pd.DataFrame(ratings_data, columns=['User', 'Product', 'Rating'])

# Save DataFrame to a CSV file
ratings_df.to_csv('user_ratings.csv', index=False)
