import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Page
import Login from "./pages/Login";

// Sub Page
import SignUp from "./components/SignUp";
import Home from "./pages/Home";
import SignIn from "./components/SignIn";
import ChatRoom from "./pages/ChatRoom";



const App = () => {
  return (
   <div className="App">
    <Router>
      <Routes>
        {/* Pages */}
        <Route path="/" element={ <Home /> } />
        {/* <Route path="Home" element={ <Home /> } /> */}
        <Route path="Login" element={ <Login /> } />
        <Route path="Chat-Room" element={ <ChatRoom /> } />

        {/* Sub Page */}
        <Route path="SignUp" element={ <SignUp /> } />
        <Route path="SignIn" element={ <SignIn /> } />

      </Routes>
    </Router>
   </div>
  );
};

export default App;