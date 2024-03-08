import { GoogleLogin } from "react-google-login";

import React from 'react'
import { useNavigate } from "react-router-dom";

const CLIENT_ID="459880402329-mt19aunan8bs692kgvhigrigh3ipe9vn.apps.googleusercontent.com";
function Login({login}) {
    let Navigate = useNavigate()
    const onSuccess=(res)=>{
           if(res?.profileObj?.googleId){
            // login();
            Navigate("/");
           }
    }
    const onFailure=(res)=>{
        console.log("login failure",res)
 }
  return (
    <div>
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        />
    </div>
  )
}

export default Login

