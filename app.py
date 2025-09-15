from flask import Flask, request, jsonify

app = Flask(__name__)

@app.get("/")
def health():
    return jsonify({"status": "ok"})

@app.post("/generate")
def generate():
    data = request.get_json(silent=True) or {}
    subject = data.get("subject", "onbekend vak")
    return jsonify({
        "leerdoelen": [
            f"Leerdoel 1 voor {subject}",
            f"Leerdoel 2 voor {subject}",
            f"Leerdoel 3 voor {subject}"
        ]
    })
