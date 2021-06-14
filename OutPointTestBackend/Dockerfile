#Flask server image
FROM python:3
#Setup working directory
WORKDIR /OutPointTestBackend
#Copy all files into container
COPY . .
#upgrade pip
RUN pip3 install --upgrade pip
# Install the requirements to run flask endpoint and SQAM.
RUN pip3 install -r requirements.txt
#Run the flask backend
CMD ["python3", "-u", "servelet.py"]
