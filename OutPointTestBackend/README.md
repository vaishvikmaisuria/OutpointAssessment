# OutPointTestBackend

## 1. Local Development Setup

The test code package can be configured locally with:

### 1.1 Install Python Requirements

```
# Create virtual environment
python3 -m venv ./venv
# Activate virtual environment
source ./venv/bin/activate
# Install requirements
pip install -r requirements.txt
```

### 1.2 Run Server 

The test code servelet can be run locally at `localhost:5000` with:

```
python app/servelet.py -ho 0.0.0.0 -p 5000
```

## 2. Backend Assignment

### Part 1

Edit the `data_get` method in `app/servelet.py `so that it returns the data stored in `data.json`, rather than `STATIC_DATA`.

### Part 2

Following the flask format, create a POST request endpoint in `app/servelet.py` that takes the channel name (Facebook, Google) as an argument called `channel` and returns the corresponding entry from `data.json`.


### Part 3

Add Normally distributed (https://en.wikipedia.org/wiki/Normal_distribution) noise to the response of the the POST request in `app/servelet.py`. 

The noise should have a mean of 0 and variance of 1.

### Part 4

Create a Dockerfile and build a container using Docker to run this servelet.

Record the commands you used to build and run the dockerfile (name it Dockerfile) on your machine.
<!-- Use the Makefile -->
0. Start the docker application on your computer
1. Locate the Makefile
2. Run Command "Make build"
3. Open Web browser type "localhost:3000"
