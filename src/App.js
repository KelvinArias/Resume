import { useState, useEffect } from "react";
import Contact from "./Contact";
import Home from "./Home";
import Work from "./Work";
import "./App.css";
import cx from "classnames";
import CursorIcon from "./icons/cursor";
import Footer from "./Footer";
import { HOME } from "./const";

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
    <main className="app">
      <section className={cx("content", navigation, { modalIsOpen })}>
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
      </section>
      <Footer navigation={navigation} setNavigation={setNavigation} />
      <CursorIcon cursorPosition={cursorPosition} />
    </main>
  );
}

export default App;
