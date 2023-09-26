import React from "react";
import SocialLogin from "react-social-login";

const SocialButton = ({
  children,
  triggerLogin,
  triggerLogout,
  ...props
} = props) => {
  const style = {
    background: "#eee",
    border: "1px solid black",
    borderRadius: "3px",
    backgroundColor: "orange",
    display: "inline-block",
    margin: "5px",
    padding: "10px 20px",
  };

  return (
    <div onClick={triggerLogin} style={style} {...props}>
      <div className="common-padding about_sec_div">{children}</div>
    </div>
  );
};

export default SocialLogin(SocialButton);
