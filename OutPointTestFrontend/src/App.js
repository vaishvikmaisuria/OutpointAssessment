import { React, useState } from "react";
import { getRequest, postRequest } from "./network";
const logo = 'outpoint-logo.png'

// executes the get request for route /data
async function getAllDataFromBackend(){
  try {
    const response = await getRequest("/data", "");
    return response.data;
  } catch (e) {
    console.log(e);
    return {
      error: true,
      status: e.response && e.response.status,
      message: e.response && e.response.data,
    };
  }
}

// executes the Post request for route /data
async function getChannelDataFromBackend(channel){
  //validation for prohibited keys
  const reqBody = {
    channel: channel ? channel : "Google",
  };
  try {
    const response = await postRequest("/data", reqBody);
    return response.data;
  } catch (e) {
    console.log(e);
    return {
      error: true,
      status: e.response && e.response.status,
      message: e.response && e.response.data,
    };
  }
}


function App() {
  const [googleData, setGoogle] = useState(0);
  const [facebookData, setFacebook] = useState(0);
  
  // handle button click for get request 
  const handleGetRequest = () => {
    getAllDataFromBackend()
      .then(data => {
        setGoogle(data["Google"])
        setFacebook(data["Facebook"])
      })
      .catch(err => console.log('There was an error:' + err));
    
  }
  // handle button click to reset the state
  const handleReset = () => {
    setGoogle(0)
    setFacebook(0)
  };

  // handle button click for post request with body "Google" channel
  const handleGooglePost = () => {
    getChannelDataFromBackend("Google").then(data => {
      setGoogle(data)
    })
    .catch(err => console.log('There was an error:' + err));
  }
  // handle button click for post request with body "Facebook" channel
  const handleFBPost = () => {
    getChannelDataFromBackend("Facebook").then(data => {
      setFacebook(data)
    })
    .catch(err => console.log('There was an error:' + err));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{width: "25%",height: "25%"}}/>
        <p>
          Facebook ROAS = {googleData}
        </p>
        <p>
          Google ROAS = {facebookData}
        </p>
      </header>
      <button onClick={handleGetRequest}>
        Get Request
      </button>
      <button onClick={handleReset}>
        Reset
      </button>
      <button onClick={handleGooglePost}>
        Post Request Google
      </button>
      <button onClick={handleFBPost}>
        Post Request Facebook
      </button>
    </div>
  );
}

export default App;
