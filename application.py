import requests
from flask import Flask, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'

headers = {
  'Accepts': 'application/json',
  'X-CMC_PRO_API_KEY': os.getenv('API_KEY'),
}

def scrape_listings():
    response = requests.get(url, headers=headers)
    data = response.json()
    return data.get('data')


@app.route('/')
def index():
    return jsonify(message='hello world')

@app.route('/listings')
def get_listings():
    listings = None
    try:
        listings = scrape_listings()
    except Exception as  e:
        print('error', e)
        listings = []
    
    return { "data": listings}

if __name__ == "__main__":
    app.run(debug=True)
