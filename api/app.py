from flask import request
from flask_api import FlaskAPI
from flask_cors import CORS

app = FlaskAPI(__name__)
CORS(app)


@app.route("/", methods=["GET"])
def home():
    name = request.args.get("name", "")
    return {"msg": "Hello " + name}, 200


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
