"use client";
import React from "react";
import axios from "axios";
import FacebookLogin from "react-facebook-login";

const InstagramLogin = () => {
  const responseFacebook = async (response) => {
    console.log("response", response);
    if (response.status !== "unknown") {
      // Use the Facebook Access Token to get an Instagram User Token
      const { accessToken } = response;
      const url = `https://graph.instagram.com/v12.0/access_token?grant_type=ig_exchange_token&client_id=YOUR_APP_ID&client_secret=YOUR_APP_SECRET&fb_exchange_token=${accessToken}`;

      try {
        const instagramResponse = await axios.get(url);
        console.log("instagramResponse", instagramResponse.data);
        // You can use the Instagram User Token here for API requests
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <div className="common-padding about_sec_div">
        <FacebookLogin
          appId="847135250047179"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
          icon="fa-instagram"
          textButton="Login with Instagram"
        />
      </div>
    </div>
  );
};

export default InstagramLogin;

// Success Response
// {
//   "name": "Uttam Dodiya",
//   "picture": {
//       "data": {
//           "height": 50,
//           "is_silhouette": false,
//           "url": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=122097579416057482&height=50&width=50&ext=1698301267&hash=AeSgeEFCfVGOEY32yTM",
//           "width": 50
//       }
//   },
//   "id": "122097579416057482",
//   "userID": "122097579416057482",
//   "expiresIn": 5934,
//   "accessToken": "EAAMCdwun4MsBO4mHK0ga4xb76pu1oK3XwAHWWVCoBZBUZB3ZCCokhiruvx9sZCI7vAKpgbzwfcGaEYY7iRV5q3eQC8BaA3ZCTBSLcvZBCpAC6zAvdhazVJbm8pVX6QypBb54WfE07295JuuWkUebxGyjciTNIA55NRpu4QeCUdfEPInlAdjwBA10KHfDXi8FKrZA300SViDtJTDzgWDxQfWZATCTAUWVZC2wiXpgZD",
//   "signedRequest": "Brf2R8ywW9n-ZXzi3SqewVV5yUpmAG4_YSQZEWu7il4.eyJ1c2VyX2lkIjoiMTIyMDk3NTc5NDE2MDU3NDgyIiwiY29kZSI6IkFRQUVDU2tMUXlMT2ViVlBIRTNTMUZUUXNEWGV0NjlPTWNFb2t5VDJqMlU1TnU4Mk5KRVlfdi03NFQ5SGN4c2w3VVM3TlJYbk5OU2pqXzRXVnNxSzhNb3ExY1BNaG9nQ3czNHF2Y2E1UVlmMnA2dEZYQVFkajlSREhBa2ktajNiVHlJWjZocm9Qb3JpMmZ5c3JGMDNFNVhCNFNZUkdNTm5mS0ZFYjZQaVhzU2IzRTBaVmFPaHZQb1Q0Y1ppQS1rVHNpWEJXTGtjeU5NZWNJRElrbnJiZWNfY2lWVWJKSm9WQ1o0VUhyWE9pb3JROWwyVVFiQ0t5UDFYZG5jODAwbDNLa3RQcnBnMmV4MlBtcUZCT1ZZMnpvZU5GU2RnYlVsdTFFMTJfajBLeUVzVnZDMW12d1BJc2plMm1nZFhqUE03bFM4ejYxbkF1eVllYTRpUkFTMGxxeVVSIiwiYWxnb3JpdGhtIjoiSE1BQy1TSEEyNTYiLCJpc3N1ZWRfYXQiOjE2OTU3MDkyNjZ9",
//   "graphDomain": "facebook",
//   "data_access_expiration_time": 1703485266
// }
