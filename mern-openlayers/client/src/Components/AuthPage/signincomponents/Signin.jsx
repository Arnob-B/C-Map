import s from './Signin.module.css'
import Mainsigninframe from "./Signinform.jsx"

function Signin({setstate}){
  return(
    <div className={s.container}>
      <Mainsigninframe setstate={setstate}/>
    </div>
  )
}


export default Signin;