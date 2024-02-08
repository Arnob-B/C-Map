import Signin from "./components/signincomponents/Signin.jsx";
import Signup from "./components/signupcomponents/Signup.jsx"
import {BrowserRouter,Routes,Route, useNavigate} from "react-router-dom"
import {useEffect, useState} from "react"

const SamplApp=()=>{
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/completed" element={(<div>hello</div>)}/>
    </Routes>
    </BrowserRouter>
  )
}
const App = ()=>{
  return(
    <SamplApp/>
  )
}


export default App;