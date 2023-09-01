import { useState, useEffect } from "react";
import Contact from "./Contact";
import Home from "./Home";
import Work from "./Work";
import "./App.css";
import cx from "classnames";

function App() {
  const [navigation, setNavigation] = useState("home");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [modalIsOpen, setModal] = useState(false);

  const mouseMove = (e) =>
    setCursorPosition({ x: e.pageX - 30, y: e.pageY - 30 });

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div className="app">
      <div className={cx("content", navigation, { modalIsOpen })}>
        <Contact navigation={navigation} />
        <Home
          navigation={navigation}
          setModal={setModal}
          showModal={modalIsOpen}
          setNavigation={setNavigation}
        />
        <Work setModal={setModal} navigation={navigation} />
      </div>
      <div className="footer">
        <button
          className={cx("btn", { selected: navigation === "contact" })}
          type="button"
          onClick={() => setNavigation("contact")}
        >
          Contact
        </button>
        <button
          className={cx("btn", { selected: navigation === "home" })}
          type="button"
          onClick={() => setNavigation("home")}
        >
          Home
        </button>
        <button
          className={cx("btn", { selected: navigation === "work" })}
          type="button"
          onClick={() => setNavigation("work")}
        >
          Work
        </button>
      </div>
      <svg
        className="cursor"
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        style={{ left: cursorPosition.x, top: cursorPosition.y }}
      >
        <circle cx="30" cy="30" r="10" fill="white" />
        <circle
          cx="30"
          cy="30"
          r="29"
          stroke="white"
          strokeWidth="1"
          fill="transparent"
        />
        Sorry, your browser does not support inline SVG.
      </svg>
    </div>
  );
}

export default App;
