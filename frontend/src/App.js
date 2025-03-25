// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Friends from "./pages/Friends";
import Chat from "./components/Chat";
import SignUp from "./pages/Signup";
import SignIn from "./pages/SignIn";
import Footer from "./components/Footer";
import { ThemeProvider } from './components/ThemeContext'; // Import ThemeProvider

function App() {
  return (
    <ThemeProvider> {/* Wrap the app with ThemeProvider */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
