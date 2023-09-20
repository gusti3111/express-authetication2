import React from "react";

const Login = () => {
    const handleLoginClick = () => {
        // Redirect ke rute OAuth2 di server Express.js
        window.location.href = 'http://localhost:3100/auth/callback'; // Sesuaikan URL dengan rute OAuth2 Anda
      };
  return (
    <div>
    <h2>Selamat datang!</h2>
    <button onClick={handleLoginClick}>Login with Google</button>
  </div>
  )
};

export default Login;
