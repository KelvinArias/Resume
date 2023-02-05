import { useState } from "react";
import Home from "./Home";
import Work from "./Work";
import "./App.css";
import cx from "classnames";

function App() {
  const [navigation, setNavigation] = useState("home");
  return (
    <div className="app">
      <div className={cx("content", navigation)}>
        <Home navigation={navigation} setNavigation={setNavigation} />
        <Work navigation={navigation} />
      </div>
      <div className="footer">
        <button
          className={cx("btn", { Selected: navigation === "contact" })}
          type="button"
          onClick={() => setNavigation("contact")}
        >
          Contact
        </button>
        <button
          className={cx("btn", { Selected: navigation === "home" })}
          type="button"
          onClick={() => setNavigation("home")}
        >
          Home
        </button>
        <button
          className={cx("btn", { Selected: navigation === "work" })}
          type="button"
          onClick={() => setNavigation("work")}
        >
          Work
        </button>
      </div>
    </div>
  );
}

export default App;
