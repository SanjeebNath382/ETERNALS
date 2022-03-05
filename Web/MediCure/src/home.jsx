import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import App from "./App";
import Login from "./components/login";
import Vitals from "./components/vitals";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Home = () => {

  return (
    <Routes>
     <Route path="/" element={<App />}>
        </Route>
        <Route path="/login" element={ <Login />}>
         </Route>
         <Route path="/vitals" element={ <Vitals />}></Route>
  </Routes>
    
  );
};

export default Home;
