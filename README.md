# How to run the application

0. Start the docker application on your computer
1. Locate the Makefile
2. Run Command `make build`
3. Open Web browser type `localhost:3000`

# Work Completed

## Frontend 
0. Created the network folder which contains which contains 3 helper functions which help perform the axios api calls
1. Complete the `getAllDataFromBackend()` and `getChannelDataFromBackend()` methods in `App.js`.
2. I created 4 buttons in the UI (Get Request, Reset, Post Request Google, Post Request Facebook)
3.  Created a Dockerfile and build a container using Docker to run this react project

## Backend

0. Edited the `data_get` method in `app/servelet.py `so that it returns the data stored in `data.json`.
1. Created a POST request endpoint in `app/servelet.py` that takes the channel name (Facebook, Google) as an argument called `channel` and returns the corresponding entry from `data.json`.
2. Added Normally distributed noise to the response of the the POST request in `app/servelet.py`.
3. Created a Dockerfile and build a container using Docker to run this servelet

## System Design

0. Created a docker-compose.yml file to run both of the container as services
1. Created a Make file to easily start the project 