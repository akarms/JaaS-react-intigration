import React, { useState } from "react";
import JitsiMeetingComponent from "./component/JitsiMeeting/JitsiMeetingComponent";
import getToken from "./component/JaasJWT";
import './App.css';

function App() {
  const roomName = "Pharma Connect";
  const [userName, setUserName] = useState(""); // State to store user's name
  const [meetingStarted, setMeetingStarted] = useState(false); // State to control meeting start
  const [token, setToken] = useState(""); // State to store JWT token

  const handleInputChange = (event) => {
    setUserName(event.target.value); 
  };

  const startMeeting = () => {
    if (userName.trim()) {
      // Call the getToken function to get the JWT token
      getToken(userName).then((token) => {
        setToken(token);
      });
      setMeetingStarted(true); 
    } else {
      alert("Please enter your name before starting the meeting.");
    }
  };

  return (
    <div className="App">
        {!meetingStarted ? (
          // Render the form when the meeting hasn't started
          <header className="App-header flex flex-col justify-center items-center min-h-screen bg-gray-100">

          <>
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Jitsi Meeting App</h1>
            <p className="mb-6 text-center text-xl text-gray-600 font-serif">Enter Your Name to Join the Meeting</p>
            
            <div className="mb-4 w-full max-w-sm">
              <input 
                type="text" 
                placeholder="Your name" 
                value={userName} 
                onChange={handleInputChange} 
                className="block w-full rounded-md border border-gray-300 py-2 px-4 text-gray-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
              />
            </div>
            
            <button 
              onClick={startMeeting}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-md shadow-md transition duration-200"
            >
              Create Meeting
            </button>
          </>
          </header>

        ) : (
          // Render the meeting component when the meeting has started
          <JitsiMeetingComponent
            roomName={roomName}
            token={token}
            onMeetingEnd={() => setMeetingStarted(false)}
          />
        )}
    </div>
  );
}

export default App;
