import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import index from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AnimatedCursor from "react-animated-cursor";

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
          <Route path="/" Component={index} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
