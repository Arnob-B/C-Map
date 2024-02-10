import { Routes ,Route} from "react-router-dom";
import Signin from "./signincomponents/Signin";
import Signup from "./signupcomponents/Signup";
import Map from "../Map"

const Auth=({setstate})=>{
  return(
    <div>
    <Routes>
      <Route path='/' element={<Signup />}/>
      <Route path='Signup' element={<Signup/>}/>
      <Route path='Signin' element={<Signin setstate={setstate}/>}/>
      <Route path='*' element={<Signin setstate={setstate}/>}/>
    </Routes>
    </div>
  );
}


export default Auth;