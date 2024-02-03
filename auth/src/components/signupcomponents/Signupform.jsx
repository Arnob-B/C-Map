import s from "./Signupform.module.css"

const TestItem=()=>{
  return(
    <div className="test">
      hello
    </div>
  )
}


const MainForm=()=>{
  const signup=async ()=>{
    const result = await fetch("http://localhost:3000/user/signin",{
      method:"POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'fullname': document.getElementById('user_fname').value,
          'username': document.getElementById('user_name').value,
          'password': document.getElementById('user_pass').value,
        },
    });
    if(result.ok){
      console.log(result)
      const body = await result.json();
      alert("Welcome to our application plse sign up now...")
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
  return(
    <div className={s.Displaymessage}>
      <div className={s.title}>
      Sign up here!
      </div>
      <div className={s.desc}>
      Enter your personal details to access the website. 
      </div>
      <button className={s.signupbuttoncontainer} onClick={sw}>Sign In</button>
    </div>
  )
}
const Mainsignupframe =({sw})=>{
return(
  <div className={s.mainframe}>
    <DisplayMessage sw={sw}>
      </DisplayMessage>
    <MainForm/>
  </div>
)
}

export default Mainsignupframe;