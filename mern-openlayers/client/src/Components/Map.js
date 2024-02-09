import { Routes, Route } from 'react-router-dom';
import StreetLight from './StreetLight';
import CrimeRate from './CrimeRate';
import Signin from "./AuthPage/signincomponents/Signin.jsx";
import Signup from "./AuthPage/signupcomponents/Signup.jsx"
import Navbar from './Navbar';
function Map() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/StreetLight' element={ <StreetLight /> }></Route>
        <Route path='/CrimeRate' element= { <CrimeRate /> }></Route>
        <Route path='/Signin' element= { <Signin/> }></Route>
        <Route path='/Signup' element= { <Signup/> }></Route>
        <Route path='/' element= { <Signup/> }></Route>
      </Routes>
    </>
    
  );
}
export default Map;