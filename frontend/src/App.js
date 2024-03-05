import { useEffect } from "react";
import Aos from "aos";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/UI/Hero";
import Services from "./components/UI/Services";
import Portfolio from "./components/UI/Portfolio";
import Contact from "./components/UI/Contact";
import Routers from "./routers/Routers";
import { useLocation } from 'react-router-dom';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  const location = useLocation();
  const currentPath = location.pathname;
  console.log('Current Path:', currentPath);

  return <>
  <Routers/>
   {/* {
     currentPath == '/admin' || currentPath == '/user/dashboard'?<Routers/>:
     <div>
       <Header/>
      <main>
        <Hero/>
        <Services/>
        <Portfolio/>
        <Contact/>
     </main>
     <Footer/>
     </div>
   } */}
  </>
}

export default App;
