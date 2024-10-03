import * as consts from  "../../consts" 

const getToken = async (username) => {
    try {
      const response = await fetch(`${consts.getTokenApi}?username=${username}`); // Adjust the URL as per your backend API
      const data = await response.json();
      
      if (response.ok) {
        return data.token; // Assuming the server responds with { token: "your-token" }
      } else {
        console.error("Error fetching token:", data.error);
        return "";
      }
    } catch (error) {
      console.error("Error fetching token:", error);
      return "";
    }
  };
  
  export default getToken;
  