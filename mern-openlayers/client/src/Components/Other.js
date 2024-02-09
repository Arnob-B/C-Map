import { useEffect, useState } from "react"
import default_userProfile from "../assets/userprofile.png"
import axios from 'axios'


export default function Other(){
  const [username,setusername] = useState();
  useEffect(()=>{
    setTimeout(async () => {
      await axios.get("/getusername",{
        headers:{
          "authorization":localStorage.getItem("Token"),
        }
      })
    }, 5000);
  },[]);
  return(
    <div className="other-container">
      <img src={default_userProfile} className="profilepic"></img>
      <span>
      {username}
      </span>
    </div>
  )
}