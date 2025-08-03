import asyncio
from flask import Flask, request, jsonify
from flask_cors import CORS
import Translate


app = Flask(__name__)

CORS(app)

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    message = data.get("message", "")
    print("Request incoming")
    result = asyncio.run(Translate.translate_text(message))
    print(result)
    return jsonify({"message" : result})


if __name__ == "__main__":
    app.run(port=5000)
