import { useState, useEffect } from "react";
import Contact from "./Contact";
import Home from "./Home";
import Work from "./Work";
import "./App.css";
import cx from "classnames";
import CursorIcon from "./icons/cursor";
import { HOME, CONTACT, WORK } from "./const";

function App() {
  const [navigation, setNavigation] = useState(HOME);
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
        <Work
          showModal={modalIsOpen}
          setModal={setModal}
          navigation={navigation}
        />
      </div>
      <div className="footer">
        <button
          className={cx("btn", { selected: navigation === CONTACT })}
          type="button"
          onClick={() => setNavigation(CONTACT)}
        >
          Contact
        </button>
        <button
          className={cx("btn", { selected: navigation === HOME })}
          type="button"
          onClick={() => setNavigation(HOME)}
        >
          Home
        </button>
        <button
          className={cx("btn", { selected: navigation === WORK })}
          type="button"
          onClick={() => setNavigation(WORK)}
        >
          Work
        </button>
      </div>
      <CursorIcon cursorPosition={cursorPosition} />
    </div>
  );
}

export default App;
