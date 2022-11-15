import{Button} from "@mui/material"
import React from 'react'
//import { auth, provider } from "./firebase";
import "./Login.css";


function Login() {
    // const signIn= () =>{
    //     //do google login
    //     auth.signInWithPopup(provider).catch((error)=> alert(error.mesaage));
    // };
  return (
    <div className='login'>
      <div className="login_logo">
        <img src="https://logovtor.com/wp-content/uploads/2022/06/discord-logo-vector-2022.png" alt="" />
      </div>

      {/* <Button onClick={signIn}>Sign In</Button> */}
    </div>
  );
}

export default Login
