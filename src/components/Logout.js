import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';

function Logout({onLogout}) {
    const CLIENT_ID="";
   

    return (
        <div>
            <GoogleLogout
                clientId={CLIENT_ID}
                buttonText="Logout"
                onLogoutSuccess={onLogout}
            >
            </GoogleLogout>
        </div>
    )
}

export default Logout;
