from flask import Flask, jsonify, request, send_from_directory, render_template
import os

app = Flask(__name__, static_folder='static/static')
app.config['TEMPLATES_AUTO_RELOAD'] = True
app.jinja_env.auto_reload = True
app.debug = True

@app.route('/api/')
def index():
    # return render_template('index.html')
    return send_from_directory('static', 'index.html')



@app.route('/api/process', methods=['POST'])
def process():
    data = request.get_json()
    text = data.get('text')
    altered_text = text.upper()

    return jsonify({'processed_text': altered_text})

@app.route('/api/testing')
def test():
    response_body = {
        "response": "This is online!"
    }

    return response_body




if __name__ == '__main__':
    app.run(debug=True)