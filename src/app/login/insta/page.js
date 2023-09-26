"use client";
import { LoginSocialInstagram } from "@/components/Login/LoginWithInsta";
import React, { useCallback, useState } from "react";
// import { LoginSocialInstagram, SocialButton } from "reactjs-social-login";

// const REDIRECT_URI =
//   'https://plenty-planets-beam-42-118-51-2.loca.lt/account/login';
// const REDIRECT_URI = "https://localhost:3000/";
// const REDIRECT_URI = "https://192.168.2.118:3000/";
const REDIRECT_URI = "https://develop--famous-marigold-3c6ada.netlify.app/";

// https://develop--famous-marigold-3c6ada.netlify.app/
// ?code=AQDHp7Z7IXxYAN6wiZ4VwysimSLONrarAg0H7tte18_WYGvzn9anxf9IQKi_C9wKK7PYH7M-RIPbDnA-lsQhT8NWIHw980kD0URpbwzTUTeY36rhq6uDM5OJIS8binahJyuE2cDH9cyOD3Yn12R89PWX-tY7U-2aHsGoL6-pHy03Up5KLFQ4doi0Ju7XbARf6FLgsMZqSGjU_GVRaie3zjK-1VCiqsJQMWmKlam8ETN7HQ
// &state=_instagram#_

const App = () => {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState();

  const onLoginStart = useCallback(() => {
    alert("login start");
  }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider("");
    alert("logout success");
  }, []);

  const onLogout = useCallback(() => {}, []);

  const handleLoginSuccess = (user) => {
    // Handle the successful login here.
    console.log("User logged in:", user);
    // The popup window will automatically close as part of the Instagram redirect URL script.
  };

  return (
    <>
      {/* {provider && profile && (
        <User provider={provider} profile={profile} onLogout={onLogout} />
      )} */}
      <div className="common-padding about_sec_div">
        <div className={`App ${provider && profile ? "hide" : ""}`}>
          <h1 className="title">ReactJS Social Login</h1>

          <LoginSocialInstagram
            client_id={
              process.env.REACT_APP_INSTAGRAM_APP_ID || "252948051062346"
            }
            client_secret={
              process.env.REACT_APP_INSTAGRAM_APP_SECRET ||
              "2bc90ac639463eb109e1a328c98165c2"
            }
            redirect_uri={REDIRECT_URI}
            onLoginStart={onLoginStart}
            onLogoutSuccess={onLogoutSuccess}
            onResolve={({ provider, data }) => {
              console.log("provider, data", provider, data);
              // setProvider(provider);
              // setProfile(data);
            }}
            onReject={(err) => {
              console.log("err", err);
              console.log(err);
            }}
            response_type="code"
            fields="id,username,account_type,media_count"
          >
            <div>Insta</div>
          </LoginSocialInstagram>

          {/* <SocialButton
            provider="instagram"
            appId="252948051062346"
            onLoginSuccess={handleLoginSuccess}
          >
            Login with Instagram
          </SocialButton> */}
        </div>
      </div>
    </>
  );
};

export default App;
