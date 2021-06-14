import argparse
import logging
import json, os 
from flask import Flask, jsonify, request
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

STATIC_DATA = {"Google": 1.5}
SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
# read the data.json file
json_url = os.path.join(SITE_ROOT, "static/data", "data.json")
FILE_DATA = json.load(open(json_url))

def noise() -> float:
	"""
	TODO: PART 3

	Change this section to return a float value that is
	randomly distributed with mean = 0 and variance = 1
	"""
	# “normal” (Gaussian) distribution of mean 0 and variance 1
	noise = np.random.normal(0,1,1)
	return noise[0]

@app.route("/")
def index():
	return jsonify({"message" :"A Simple Test Backend!"})

@app.route("/data/", methods=['GET'])
def data_get():
	"""
	TODO: PART 1

	Instead of using STATIC_DATA, read from data.json
	and return its contents
	"""
	
	RETURN_DATA = {channel: value + noise() for channel, value in FILE_DATA.items()} 
	logging.info("RESPONSE: {}".format(RETURN_DATA))

	response = jsonify(RETURN_DATA)
	response.headers.add('Access-Control-Allow-Origin', '*')

	return response

"""
TODO: PART 2

Create a POST request similate to data_get that uses a
channel argument to serve data from a specific channel
contained in data.json (i.e. Google or Facebook)
"""
@app.route('/data/', methods=['POST'])
def json_example():
	request_data = request.get_json()
	# read the body of the request 
	channel = request_data["channel"]
	# add the noise
	result = int(FILE_DATA[channel]) + noise()
	return jsonify(result)

def parse_args():
	parser = argparse.ArgumentParser(description='Start the test backend servelet')
	parser.add_argument("-ho", "--host", type=str, help="The host for the application",
						default="0.0.0.0")
	parser.add_argument("-p", "--port", type=int, help="The port for the application server",
						default=5000)
	return parser.parse_args()

if __name__ == "__main__":
	arguments = parse_args()
	logging.info("Arguments parsed ... Running App")
	
	app.run(host=arguments.host, port=arguments.port)