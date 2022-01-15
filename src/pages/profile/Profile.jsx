import "./profile.scss";
import backgroundImage from "../../assets/background-image.jpg";
import miniLogo from "../../assets/miniLogo.png";
import arrow from "../../assets/arrow.png";
import userImage from "../../assets/userImage.png";
import edit from "../../assets/edit.png";
import moreHorizontal from "../../assets/more-horizontal.png";
import Tabs from "./tabs/Tabs";
import About from "./about/About";
import Carousel from "./carousel/Carousel";
import Skills from "./skills/Skills";
import Experience from "./experience/Experience";
import Education from "./education/Education";

const Profile = () => {
  return (
    <div className="grid">
      <div className="sections">
        <section className="user">
          <div className="user__background">
            <img
              className="user__background--image"
              src={backgroundImage}
              alt="user background"
            />
            <div className="user__background--image--items">
              <button>
                <img src={edit} alt="edit" />
                <p>EDIT PROFILE </p>
              </button>
              <button>
                <img src={moreHorizontal} alt="more" />
              </button>
            </div>
          </div>
          <div className="user__information">
            <div className="user__information--container">
              <div>
                <img className="user__image" src={userImage} alt="user image" />
              </div>
              <div className="user__information--container-top">
                <div className="user__information--top">
                  <div className="user__information--name">
                    <h2>Dmitry Kargaev</h2>
                    <img src={miniLogo} alt="mini logo" />
                  </div>
                  <div className="user__information--location">
                    <img height={16} src={arrow} alt="arrow" />
                    <p>Saint Petersburg, Russian Federation</p>
                  </div>
                </div>
                <p className="user__information--content">
                  Freelance UX/UI designer, 80+ projects in web design, mobile
                  apps (iOS & android) and creative projects. Open to offers.
                </p>
                <div className="user__information--buttons">
                  <button>CONTACT INFO</button>
                  <button className="outline">1,043 CONNECTIONS</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Tabs />
        <About />
        <Carousel />
        <Skills />
        <Experience />
        <Education />
      </div>
      <div className="sidebars"></div>
    </div>
  );
};

export default Profile;
