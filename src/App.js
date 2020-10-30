import React, { useEffect, useState } from "react";
import "./styles.css";
import Form from "./Form"
import GitCard from "./Card"
import axios from "axios"
import Error from "./Error"





export default function App() {

  let [userData, setUserData] = useState({});
  let [error, setError] = useState(false);
  
const fetchData = (user='fahadaleem')=>{
  user = user.replace(' ',"");
  axios.get(`https://api.github.com/users/${user}`)
  .then(res=>{
    const data = {
      username:res.data.name,
      userBio:res.data.bio,
      userAvatar:res.data.avatar_url,
      userLocation:res.data.location,
      repositories:res.data.public_repos,
      followers:res.data.followers,
      following:res.data.following
    }
    userData = data;
    setUserData(userData);
    setError(false)
  })
  .catch(err=>setError(true));

}


  useEffect(fetchData,[]);


  // Take input from the user
  const handleInputUserName = (e)=>{
    const enterKey = e.which;
    const user = e.target.value;
    if(enterKey===13)
    {
      fetchData(user)
    }
  }

  console.log(userData)
  return (
    <div className="App">
      <h1 className="git-heading">Github card Project</h1>
      <div className="git-card-section">
      <Form handleInputUserName={handleInputUserName}/>
      {error?<Error />:<GitCard userData = {userData}/>}
        </div>
    </div>
  );
}
