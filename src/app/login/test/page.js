"use client";
import SocialButton from "@/components/Login/SocialButton";
import React, { Component } from "react";

export default class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logged: false,
      user: {},
      currentProvider: "",
    };
    this.nodes = {};

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLoginFailure = this.onLoginFailure.bind(this);
    this.onLogoutSuccess = this.onLogoutSuccess.bind(this);
    this.onLogoutFailure = this.onLogoutFailure.bind(this);
    this.logout = this.logout.bind(this);
  }

  setNodeRef(provider, node) {
    if (node) {
      this.nodes[provider] = node;
    }
  }

  onLoginSuccess(user) {
    console.log("onLoginSuccess", user);

    this.setState({
      logged: true,
      currentProvider: user._provider,
      user,
    });
  }

  onLoginFailure(err) {
    console.error(err);

    this.setState({
      logged: false,
      currentProvider: "",
      user: {},
    });
  }

  onLogoutSuccess() {
    this.setState({
      logged: false,
      currentProvider: "",
      user: {},
    });
  }

  onLogoutFailure(err) {
    console.error(err);
  }

  logout() {
    const { logged, currentProvider } = this.state;

    if (logged && currentProvider) {
      this.nodes[currentProvider].props.triggerLogout();
    }
  }

  render() {
    let children;

    // if (this.state.logged) {
    //   children = <UserCard user={this.state.user} logout={this.logout} />;
    // } else {
    children = [
      <SocialButton
        provider="facebook"
        appId="847135250047179"
        onLoginSuccess={this.onLoginSuccess}
        onLoginFailure={this.onLoginFailure}
        onLogoutSuccess={this.onLogoutSuccess}
        getInstance={this.setNodeRef.bind(this, "facebook")}
        key={"facebook"}
        onInternetFailure={() => {
          return true;
        }}
      >
        Login with Facebook
      </SocialButton>,
      <SocialButton
        provider="google"
        appId="844845104372-h8htjngp1os1tb79nksc54dq7tko4r8n.apps.googleusercontent.com"
        onLoginSuccess={this.onLoginSuccess}
        onLoginFailure={this.onLoginFailure}
        onLogoutSuccess={this.onLogoutSuccess}
        onLogoutFailure={this.onLogoutFailure}
        getInstance={this.setNodeRef.bind(this, "google")}
        key={"google"}
        scope={"https://www.googleapis.com/auth/user.gender.read"}
      >
        Login with Google
      </SocialButton>,
      <SocialButton
        // autoCleanUri
        provider="instagram"
        appId="252948051062346"
        // redirect={
        //   // process.env.INSTAGRAM_REDIRECT ||
        //   // "https://develop--famous-marigold-3c6ada.netlify.app/"
        //   "https://192.168.2.118:3000/"
        // }
        redirect="https://develop--famous-marigold-3c6ada.netlify.app/"
        // redirect="http://localhost:3000/"
        onLoginSuccess={this.onLoginSuccess}
        onLoginFailure={this.onLoginFailure}
        onLogoutSuccess={this.onLogoutSuccess}
        getInstance={this.setNodeRef.bind(this, "instagram")}
        key={"instagram"}
        onInternetFailure={() => {
          return true;
        }}
      >
        Login with Instagram
      </SocialButton>,
      /*        <SocialButton
          provider='linkedin'
          appId='7775kne2guetd0'
          onLoginSuccess={this.onLoginSuccess}
          onLoginFailure={this.onLoginFailure}
          onLogoutSuccess={this.onLogoutSuccess}
          getInstance={this.setNodeRef.bind(this, 'linkedin')}
          key={'linkedin'}
        >
          Login with LinkedIn
        </SocialButton> */
    ];

    // Amazon only supports HTTPS
    //   if (window.location.protocol === "https:") {
    //     children.push(
    //       <SocialButton
    //         provider="amazon"
    //         appId="amzn1.application-oa2-client.26aaf63624854cbcaa084735a0fc47ed"
    //         onLoginSuccess={this.onLoginSuccess}
    //         onLoginFailure={this.onLoginFailure}
    //         onLogoutSuccess={this.onLogoutSuccess}
    //         getInstance={this.setNodeRef.bind(this, "amazon")}
    //         key={"amazon"}
    //       >
    //         Login with Amazon
    //       </SocialButton>
    //     );
    //   }
    // }

    return children;
  }
}