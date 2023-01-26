import { useEffect, useRef, useState } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { LUTPass } from "three-stdlib";
import image from "../image.png";
import moon from "../moon.jpg";
import PropTypes from "prop-types";
import "./styles.css";
import cx from "classnames";
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

const Home = ({ navigation, setNavigation }) => {
  const [showVideo, setShowVideo] = useState({
    showContainer: false,
    showPlayer: false,
  });

  useEffect(() => {
    if (showVideo.showContainer && !showVideo.showPlayer) {
      setTimeout(() => {
        setShowVideo({ ...showVideo, showPlayer: true });
      }, 600);
    }
  }, [showVideo]);

  return (
    <div className="HomeContainer">
      <div
        onClick={() =>
          navigation === "Contact"
            ? setNavigation("Home")
            : setNavigation("Contact")
        }
        className="Moon Left"
      >
        <div className="Ring" />
        <Moon direction={-0.001} />
      </div>
      <div
        onClick={() =>
          navigation === "Work" ? setNavigation("Home") : setNavigation("Work")
        }
        className="Moon Right"
      >
        <div className="Ring" />
        <Moon direction={0.001} />
      </div>
      <div className="Center">
        <svg
          className="Curve"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 499 499"
          width="200"
          height="200"
          preserveAspectRatio="xMidYMid meet"
        >
          <g>
            <path d="M313,13 C355,95 370,300 366,300" />
          </g>
        </svg>
        <div className="Mask Top" />
        <div className="Mask Bottom" />
        <img src={image} alt="perfil" />
        <div className="Information">
          <h1 className="Hello">Hello.</h1>
          <p className="Presentation">
            I'm Kelvin Arias and <br /> this is my journey.
          </p>
        </div>
        <ul className="Abilities">
          <li>I am a</li>
          <li>Full stack developer</li>
          <li>M.E.R.N Expert</li>
          <li>Javascript Tester</li>
          <li>Passionate programmer</li>
        </ul>
        <div
          className="Play"
          onClick={() => setShowVideo({ ...showVideo, showContainer: true })}
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.5 15.584V8.416a.5.5 0 01.77-.42l5.576 3.583a.5.5 0 010 .842l-5.576 3.584a.5.5 0 01-.77-.42z" />
          </svg>
          <p className="Tooltip">Presentation</p>
        </div>
      </div>
      <div
        className={cx("VideoContainer", {
          ShowVideoContainer: showVideo.showContainer,
          ShowPlayer: showVideo.showPlayer,
        })}
        onClick={() =>
          setShowVideo({ showContainer: false, showPlayer: false })
        }
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/nhvC5JqO5I8"
          title="YouTube video player"
          frameborder="0"
          allow="autoplay; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

Home.propTypes = {
  navigation: PropTypes.string.isRequired,
  setNavigation: PropTypes.func.isRequired,
};

export default Home;
