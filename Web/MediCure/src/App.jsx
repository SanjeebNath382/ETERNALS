import { useState, useEffect } from "react";

import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { Team } from "./components/Team";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Dashboard from "./components/dashboard";
// import DashboardDoctor from "./components/dashboardDoctor";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
     <div> 
      <Navigation />

    
      {/* <Features data={landingPageData.Features} />
      {/* <About data={landingPageData.About} /> */}
      {/* <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery}/>
      <Testimonials data={landingPageData.Testimonials} /> */}

      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />

      <Team data={landingPageData.Team} />
      {/* <Login /> */}
      {/* <Dashboard /> */}
    </div>
  );
};

export default App;
