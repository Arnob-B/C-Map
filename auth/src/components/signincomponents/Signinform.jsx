import s from './Signinform.module.css'
const TestItem=()=>{
  return(
    <div className={s.test}>
      hello
    </div>
  )
}


const MainForm=()=>{
  const signin=async ()=>{
    const result = await fetch("http://localhost:3000/user/signin",{
      method:"POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'username': document.getElementById('user_name').value,
          'password': document.getElementById('user_pass').value,
        },
    });
    if(result.ok){
      console.log(result)
      const body = await result.json();
      localStorage.setItem('token', body.jwtkey);
      alert("you are logged in...")
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
  return(
    <div className={s.Displaymessage}>
      <div className={s.title}>
        Hello, User!
      </div>
      <div className={s.desc}>
        Register with your personal account details to acess the website
      </div>
      <button className={s.signupbuttoncontainer} onClick={sw}>Sign up</button>
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