import Signin from "./components/signincomponents/Signin.jsx";
import Signup from "./components/signupcomponents/Signup.jsx"

import {useEffect, useState} from "react"
const App = ()=>{
  const [state,setstate]=useState(1) ;
  const sw = ()=>{
    setstate(!state);
  }
    if (state==1) {
      //signup
      return <Signup sw={sw}></Signup>
    }
    else{
      //signin
      return <Signin sw={sw}></Signin>
    }
}


export default App;