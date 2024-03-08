import React from 'react';
import { GoogleLogout } from 'react-google-login';

function Logout({onLogout}) {
    const CLIENT_ID="459880402329-mt19aunan8bs692kgvhigrigh3ipe9vn.apps.googleusercontent.com";

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
