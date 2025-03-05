import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import FacebookLogin from "@greatsumini/react-facebook-login";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext)!;
  const navigate = useNavigate();

  const handleGoogleSuccess = async (response: any) => {
    const { tokenId } = response;
    const { data } = await axios.post("http://localhost:3000/auth/google", { tokenId });
    login(data.token);
    navigate("/dashboard");
  };

  const handleFacebookSuccess = async (response: any) => {
    const { accessToken, userID } = response;
    const { data } = await axios.post("http://localhost:3000/auth/facebook", { accessToken, userID });
    login(data.token);
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Login</h2>
      <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <GoogleLogin onSuccess={handleGoogleSuccess} onError={() => console.error("Google login failed")} />
      </div>
    </GoogleOAuthProvider>
      <FacebookLogin
        appId="YOUR_FACEBOOK_APP_ID"
        onSuccess={handleFacebookSuccess}
        onFail={(error) => console.error("Facebook login failed", error)}
      />
    </div>
  );
};

export default Login;
