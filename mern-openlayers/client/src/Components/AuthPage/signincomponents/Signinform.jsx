import s from './Signinform.module.css'
import {useNavigate} from 'react-router-dom'


const MainForm=()=>{
  const nav = useNavigate();
  const signin=async ()=>{
    const result = await fetch("http://localhost:3000/user/signin",{ // make sure that the backend server is setup in the 3000 port
      method:"POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'username': document.getElementById('user_name').value,
          'password': document.getElementById('user_pass').value,
        },
    });
    if(result.ok){
      const body = await result.json();
      console.log(body);
      localStorage.setItem('token', body.jwtkey);
      alert("you are logged in...")
      nav('/signup');
    }
    else{
      alert("your have given faulty username and password");
    }

  }
  const toggle=()=>{
    console.log("here")
    const passfield= document.getElementById('user_pass');
    if(passfield.type==='password') passfield.type='text';
    else passfield.type='password';
  }
  return(
    <div className={s.formcontainer}>
    <div className={s.title}>Sign In</div>
    <div className={s.iboxContainer}><input type="text" id="user_name" className={s.ibox} placeholder="Enter your email"/></div>
    <div className={s.iboxContainer}><input type="password" id="user_pass" className={s.ibox} placeholder="Enter your password"/></div>
    <div className={s.forgotpasscontainer}>
      <button className={s.showpass} onClick={toggle}>Show</button>
    <button className={s.forgotpass}>forgot password?</button>
    </div>
    <button className={s.signinbutton} onClick={signin}>sign in</button>
    </div>
  )
}

const DisplayMessage=({sw})=>{
  const nav = useNavigate();
  return(
    <div className={s.Displaymessage}>
      <div className={s.title}>
        Hello, User!
      </div>
      <div className={s.desc}>
        Register with your personal account details to acess the website
      </div>
      <button className={s.signupbuttoncontainer} onClick={()=>nav('/signup')}>Sign up</button>
    </div>
  )
}
const Mainsigninframe =({sw})=>{
return(
  <div className={s.mainframe}>
    <MainForm/>
    <DisplayMessage sw={sw}>
      </DisplayMessage>
  </div>
)
}

export default Mainsigninframe;