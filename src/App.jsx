import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

import { linkedin, github } from "./assets";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />

          <Hero />
        </div>
        <div className=" z-50 fixed h-28 w-10 rounded-r-lg top-1/2 left-0   backdrop-blur-md bg-[#8872e035] border border-s-0 border-t-indigo-500 border-b-indigo-500 border-r-indigo-500  flex justify-center items-center gap-2 flex-col ">
          <img
            src={github}
            alt="github"
            className="w-full p-[3px] h-full object-contain cursor-pointer"
            onClick={() => window.open("https:github.com/gknanhe/", "_blank")}
          />
          <img
            src={linkedin}
            alt="github"
            className="w-full p-[3px] h-full object-contain "
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/ganesh-nanhe-928ab2220/",
                "_blank"
              )
            }
          />
        </div>

        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
