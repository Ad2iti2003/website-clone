import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import WebTheme from "./components/WebTheme";
import Body1 from "./components/Body1";
import Body2 from "./components/Body2";
import Footer from "./components/Footer";
import Body3 from "./components/Body3";

function App() {
  return (
    <>
  
    <Navbar/>
    <Home/>
    <WebTheme/>
    <Body1/>
    <Body2/>
    <Body3/>
    <Footer/>
    
  </>
  );
}

export default App;
