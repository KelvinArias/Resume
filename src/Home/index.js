import { useRef } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { LUTPass } from "three-stdlib";
import image from "../images/image.png";
import moon from "../images/moon.jpg";
import PropTypes from "prop-types";
import "./styles.css";
import cx from "classnames";
import { HOME, CONTACT, WORK } from "../const";
import CurveIcon from "../icons/curve";
//import PlayIcon from "../icons/play";
extend({ LUTPass });

function Moon({ direction }) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 30 }}>
      <Sphere direction={direction} />
      <ambientLight />
      <OrbitControls />
    </Canvas>
  );
}

function Sphere({ direction }) {
  const ref = useRef();
  const texture = useTexture(moon);
  useFrame((state, delta) => (ref.current.rotation.y += direction));
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhysicalMaterial
        map={texture}
        clearcoat={1}
        clearcoatRoughness={0}
        roughness={0}
        metalness={0.5}
      />
    </mesh>
  );
}

const Home = ({ navigation, setNavigation, setModal, showModal }) => {
  return (
    <article
      className={cx("homeContainer", { isNotHome: navigation !== HOME })}
    >
      <div
        onClick={() =>
          navigation === CONTACT ? setNavigation(HOME) : setNavigation(CONTACT)
        }
        className="moon left"
      >
        <div className="ring" />
        <Moon direction={-0.001} />
      </div>
      <div
        onClick={() =>
          navigation === WORK ? setNavigation(HOME) : setNavigation(WORK)
        }
        className="moon right"
      >
        <div className="ring" />
        <Moon direction={0.001} />
      </div>
      <div className="center">
        <CurveIcon />
        <img src={image} alt="perfil" />
        <div className="information">
          <h1 className="hello">Hello.</h1>
          <p className="presentation">
            I'm Kelvin Arias and <br /> this is my journey.
          </p>
        </div>
        <ul className="abilities">
          <li>Full-Stack Developer</li>
          <li>M.E.R.N Expert</li>
          <li>Javascript Tester</li>
          <li>+4 Years Work Experience</li>
        </ul>
        {/*
        <div className="play" onClick={() => setModal(true)}>
          <PlayIcon />
          <p className="tooltip">Presentation</p>
        </div>
        */}
      </div>
      {showModal && (
        <div className="videoContainer" onClick={() => setModal(false)}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/nhvC5JqO5I8"
            title="YouTube video player"
            allow="autoplay; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </article>
  );
};

Home.propTypes = {
  navigation: PropTypes.string.isRequired,
  setNavigation: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};

export default Home;
