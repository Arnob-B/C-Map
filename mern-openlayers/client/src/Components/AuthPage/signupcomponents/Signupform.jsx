import { useNavigate } from "react-router-dom"
import s from "./Signupform.module.css"


const MainForm=()=>{
      const nav = useNavigate();
  const signup=async ()=>{
    const fullname = document.getElementById('user_fname').value;
    const username = document.getElementById('user_name').value;
    const password = document.getElementById('user_pass').value;
    if(fullname===""||username===""||password==="") {alert("Plse enter the form correctly..");return;}
    const result = await fetch("https://safe-map-india.onrender.com/user/signup",{
      method:"POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'fullname': fullname,
          'username': username,
          'password': password,
        },
    });
    if(result.ok){
      console.log(result)
      const body = await result.json();
      // alert("Welcome to our application plse sign in now...")
      nav('/signin');
    }
    else{
      alert("your data are invalidate or the username already exists");
    }
  }
  const toggle=()=>{
    const passfield= document.getElementById('user_pass');
    if(passfield.type==='password') passfield.type='text';
    else passfield.type='password';
  }
  return(
    <div className={s.formcontainer}>
    <div className={s.title}>Create Account</div>
    <div className={s.iboxContainer}><input type="text" id="user_fname" className={s.ibox} placeholder="Enter your Name"/></div>
    <div className={s.iboxContainer}><input type="text" id="user_name" className={s.ibox} placeholder="Enter your email"/></div>
    <div className={s.iboxContainer}><input type="password" id="user_pass" className={s.ibox} placeholder="Enter your password"/></div>
    <div className={s.forgotpasscontainer}>
      <button className={s.showpass} onClick={toggle}>Show</button>
    {/* <button className={s.forgotpass}>forgot password?</button> */}
    </div>
    <button className={s.signinbutton} onClick={signup}>Sign Up</button>
    </div>
  )
}

const DisplayMessage=({sw})=>{
  const nav = useNavigate();
  return(
    <div className={s.Displaymessage}>
      <div className={s.title}>
      Sign up here!
      </div>
      <div className={s.desc}>
      Enter your personal details to access the website. 
      </div>
      <button className={s.signupbuttoncontainer} onClick={()=>nav('/signin')}>Sign In</button>
    </div>
  )
}
const Mainsignupframe =()=>{
return(
  <div className={s.mainframe}>
    <DisplayMessage >
      </DisplayMessage>
    <MainForm />
  </div>
)
}

export default Mainsignupframe;