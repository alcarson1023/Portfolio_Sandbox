from flask import Flask, jsonify, request, send_from_directory, render_template
import python_scripts.route_finder as route_finder
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

@app.route('/api/load-page')
def load_page():
    page = request.args.get('page')
    return render_template(page + '.html')

@app.route('/api/find_route', methods=['POST'])
def find_route():
    data = request.get_json()    
    method = data.get('method')
    selections = data.get('selectionsList')
    
    # Pass the array data to my Python function for analysis
    if method == 'return':
        result = route_finder.return_array(selections)
    elif method == 'sort':
        result = route_finder.sort_array(selections)
    else:
        result = route_finder.method_error(method, selections)
    # Return the analysis result as a JSON response
    return jsonify(result)
    # Remember to handle any potential errors and validate the data
    # received on the server-side to ensure the integrity and security of my application.

@app.route('/api/testing')
def test():
    response_body = {
        "response": "This is online!"
    }
    return response_body

@app.route('/testing')
def test_local():
    response_body = {
        "response": "This is online!"
    }
    return response_body




# if __name__ == '__main__':
#     app.run(debug=True)
if __name__ == '__main__':
    # Use the environment variable PORT if it exists, otherwise use a default port (e.g., 5000)
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)