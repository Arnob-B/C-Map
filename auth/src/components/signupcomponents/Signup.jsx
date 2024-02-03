import s from './Signup.module.css'
import Mainsignupframe from "./Signupform"

function Signup({sw}){
  return(
    <div className={s.container}>
      <Mainsignupframe sw={sw}/>
    </div>
  )
}


export default Signup;