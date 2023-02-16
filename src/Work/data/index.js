import homeEquipco from "../../images/homeProjects/homeEquipco.png";
import homeStartDesign from "../../images/homeProjects/homeStartDesign.png";
import homeIntelix from "../../images/homeProjects/homeIntelix.png";
import homeEquipco920 from "../../images/equipco/equipcoHome.png";
import equipcoLogo from "../../images/equipco/equipcoLogoNew.png";
// equipco
import equipco from "../../images/equipco/equipco.png";
import equipcoLogin from "../../images/equipco/equipcoLogin.png";
import equipcoMain from "../../images/equipco/equipcoMain.png";
import equipcoHome from "../../images/equipco/equipcoHome.png";
import equipcoLetsTalk from "../../images/equipco/equipcoLetsTalk.png";
import equipcoRequest from "../../images/equipco/equipcoRequest.png";
// Cemc
import cecmHome from "../../images/cecm/home.jpg";
import cecmcontact from "../../images/cecm/contact.jpg";
import cecmnews from "../../images/cecm/news.png";
import cecmResources from "../../images/cecm/resources.jpg";
import cecmTecno from "../../images/cecm/tecno.png";
import cecmTestimonials from "../../images/cecm/testimonials.jpg";
import cecmTransac from "../../images/cecm/transac.jpg";
// goCurrency
import goCurrencyHome from "../../images/goCurrency/goCurrencyHome.jpg";
import goCurrencyAir from "../../images/goCurrency/goCurrencyAir.jpg";
import goCurrencyActionTime from "../../images/goCurrency/goCurrencyActionTime.jpg";

const projectsInfo = [
  {
    id: "equipco",
    portrait: { src: homeEquipco, alt: "equipcoMain home page" },
    images: [
      { src: equipcoHome, alt: "equipco website home page" },
      { src: equipcoLogin, alt: "equipco login aplicantion" },
      { src: equipcoMain, alt: "equipco aplicantion" },
      { src: equipcoRequest, alt: "equipco request aplicantion" },
      { src: equipco, alt: "equipco website" },
      { src: equipcoLetsTalk, alt: "equipco lets talk website" },
    ],
    companyName: "Equipco",
    date: "02/2021 - 12/2022",
    position: "Full-stack Developer",
    description:
      "Equipco is an Chilenean startup which is creating an app for team collaboration",
    skills:
      "React, Javascript, Node, RethinkDB, Redux, Html, Css, PHP, Wordpress, WCK plugin",
    logo: { src: equipcoLogo, alt: "equipco logo" },
  },
  {
    id: "qallpa",
    portrait: { src: homeEquipco, alt: "qallpa home page" },
    images: [
      { src: homeEquipco920, alt: "qallpa home page site" },
      { src: "", alt: "" },
    ],
    companyName: "Qallpa",
    date: "05/2020 - 02/2021",
    position: "Front-end Developer",
    description: "qallpa is a call center company located in Peru",
    skills: "React, Javascript, MongoDb, Node, Redux, Html, Css, MaterialUI",
    logo: { src: equipcoLogo, alt: "qallpa logo" },
  },
  {
    id: "startDesign",
    portrait: { src: homeStartDesign, alt: "start design home page" },
    images: [
      { src: cecmHome, alt: "cecm home" },
      { src: cecmcontact, alt: "cecm contract" },
      { src: cecmnews, alt: "cecm news" },
      { src: cecmResources, alt: "cecm resources" },
      { src: cecmTecno, alt: "cecm tecno" },
      { src: cecmTestimonials, alt: "cecm testimonials" },
      { src: cecmTransac, alt: "cecm transac" },
      { src: goCurrencyHome, alt: "gocurrency home website" },
      { src: goCurrencyAir, alt: "gocurrency air website" },
      { src: goCurrencyActionTime, alt: "gocurrency action time website" },
    ],
    companyName: "Start Design",
    date: "02/2019 - 02/2020",
    position: "Web Developer",
    description:
      "Start design group is a boutique creative agency with offices in Los Angeles, Miami, and Lima; and clients all over the world",
    skills:
      "PHP, Wordpress, HTML, CSS, JavaScript, Bootstrap, Photoshop, WCK plugin, Sass",
    logo: { src: equipcoLogo, alt: "start design logo" },
  },
  {
    id: "intelix",
    portrait: { src: homeIntelix, alt: "intelix home page" },
    images: [
      { src: homeEquipco920, alt: "intelix home page" },
      { src: "", alt: "" },
    ],
    companyName: "Intelix Synergy",
    date: "02/2018 - 09/2018",
    position: "Web developer",
    description:
      "Intelix Synergy is a company dedicated to create web and app solutions for clients around the world",
    skills: "PHP, Laraven, Javascript, HTML, Css, Sass",
    logo: { src: equipcoLogo, alt: "Intelix synergy logo" },
  },
  {
    id: "curriculum",
    portrait: { src: homeIntelix, alt: "curriculum home page" },
    images: [
      { src: equipcoLogo, alt: "curriculum home page" },
      { src: "", alt: "" },
    ],
    companyName: "Curriculum",
    skills: "React, Javascript, MongoDb, Node, Html, Css",
  },
];

export default projectsInfo;
