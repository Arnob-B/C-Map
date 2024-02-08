import s from './Signin.module.css'
import Mainsigninframe from "./Signinform.jsx"

function Signin({sw}){
  return(
    <div className={s.container}>
      <Mainsigninframe sw={sw}/>
    </div>
  )
}


export default Signin;