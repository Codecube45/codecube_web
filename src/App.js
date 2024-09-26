import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import index from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AnimatedCursor from "react-animated-cursor";
import Index from "./pages/Contact/Index";
import { config } from "./pages/config";
import AboutUs from "./pages/About/AboutUs";
import Blogs from "./pages/Blog/Blogs";
import BlogDetails from "./pages/Blog/BlogDetails";
import "./assets/styles/About.css";
import Service from "./pages/Service/Service";

function App() {
  return (
    <div>
      {/* <AnimatedCursor
        innerSize={8}
        outerSize={30} // Increase size for donut effect
        color="4, 255, 255"
        outerAlpha={0.2}
        innerScale={0}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      /> */}
      <BrowserRouter>
        <Routes>
          <Route path={`${config.appUrl}`}Component={index} />
          <Route path={`${config.appUrl}contact-us`} Component={Index} />
          <Route path={`${config.appUrl}about-us`} Component={AboutUs} />
          <Route path={`${config.appUrl}blog`} Component={Blogs} />
          <Route path={`${config.appUrl}blog-detail/:slug`} Component={BlogDetails} />
          <Route path={`${config.appUrl}our-services`} Component={Service} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
