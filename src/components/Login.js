import { GoogleLogin } from "react-google-login";
import { gapi } from 'gapi-script';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

const CLIENT_ID="";
function Login() {
    const [token, setToken] = useState(localStorage.getItem('accessToken'));
    let Navigate = useNavigate()
    const onSuccess=(res)=>{
           if(res?.profileObj?.googleId){
            Navigate("/");
           }
    }
    const onFailure=(res)=>{
        console.log("login failure",res)
 }


 
 useEffect(() => {
   const start = async () => {
     await gapi.client.init({
       clientId: CLIENT_ID,
       scope: ""
     });
     if(localStorage.getItem('accessToken')==="undefined" ||localStorage.getItem('accessToken')===""){
        Navigate("/login");
     }
     const response = await gapi.auth.getToken();
     if (response && response?.access_token) {
       const accessToken = response.access_token;
       setToken(accessToken);
       localStorage.setItem('accessToken', accessToken);
     }
   }
   gapi.load("client:auth2", start);
 }, []);
  return (
    <div style={{textAlign:"center",marginTop:"20%"}}>
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        />
    </div>
  )
}

export default Login

