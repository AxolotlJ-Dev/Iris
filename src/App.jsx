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
        <Route path="Iris/" element={ <Home /> } />
        {/* <Route path="/Home" element={ <Home /> } /> */}
        <Route path="Iris/Login" element={ <Login /> } />
        <Route path="Iris/Chat-Room" element={ <ChatRoom /> } />

        {/* Sub Page */}
        <Route path="Iris/SignUp" element={ <SignUp /> } />
        <Route path="Iris/SignIn" element={ <SignIn /> } />

      </Routes>
    </Router>
   </div>
  );
};

export default App;