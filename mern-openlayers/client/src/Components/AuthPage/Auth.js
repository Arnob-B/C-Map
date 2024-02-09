import { Route, Routes } from "react-router-dom";
import Signin from "./signincomponents/Signin";
import Signup from "./signupcomponents/Signup";
import StreetLight from "../StreetLight";
import CrimeRate from "../CrimeRate";

function Auth(){
  return
  (
    <Routes>
      <Route path="/" element={<Signin />}>
        <Route path='/StreetLight' element={<StreetLight />}></Route>
        <Route path='/CrimeRate' element={<CrimeRate />}></Route>
        <Route path='/Signin' element={<Signin />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
      </Route>
      <Route path="/su" element={<Signup />} />
    </Routes>
  )
}


export default Auth;