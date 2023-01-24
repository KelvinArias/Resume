import { useState } from "react";
import Home from "./Home";
import "./App.css";
import cx from "classnames";

function App() {
  const [navigation, setNavigation] = useState("Home");
  return (
    <div className="App">
      <div className={cx("Content", navigation)}>
        <Home navigation={navigation} setNavigation={setNavigation} />
      </div>
      <div className="Footer">
        <button
          className={cx("Btn", { Selected: navigation === "Contact" })}
          type="button"
          onClick={() => setNavigation("Contact")}
        >
          Contact
        </button>
        <button
          className={cx("Btn", { Selected: navigation === "Home" })}
          type="button"
          onClick={() => setNavigation("Home")}
        >
          Home
        </button>
        <button
          className={cx("Btn", { Selected: navigation === "Work" })}
          type="button"
          onClick={() => setNavigation("Work")}
        >
          Work
        </button>
      </div>
    </div>
  );
}

export default App;
