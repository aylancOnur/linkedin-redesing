import "./skills.scss";
import pic1 from "../../../assets/profile__picture/pic1.png";
import pic2 from "../../../assets/profile__picture/pic2.png";
import pic3 from "../../../assets/profile__picture/pic3.png";
import pic4 from "../../../assets/profile__picture/pic4.png";
import pic5 from "../../../assets/profile__picture/pic5.png";
import pic6 from "../../../assets/profile__picture/pic6.png";
import pic7 from "../../../assets/profile__picture/pic7.png";
import pic8 from "../../../assets/profile__picture/pic8.png";
import pic9 from "../../../assets/profile__picture/pic9.png";
import pic10 from "../../../assets/profile__picture/pic10.png";
import pic11 from "../../../assets/profile__picture/pic11.png";
import pic12 from "../../../assets/profile__picture/pic12.png";

const Skills = () => {
  return (
    <section className="skills">
      <h2>Skills & Endoresments</h2>
      <div className="skills__cards">
        <div className="skills__cards--item">
          <div className="skills__cards--header">
            <h3>User experience (UX)</h3>
            <p>6</p>
          </div>
          <div className="avatars">
            <span className="avatar">
              <img src={pic1} alt="profile picture" />
            </span>
            <span className="avatar">
              <img src={pic2} alt="profile picture" />
            </span>
            <span className="avatar">
              <img src={pic3} alt="profile picture" />
            </span>
            <span className="avatar">
              <img src={pic4} alt="profile picture" />
            </span>
            <span className="avatar">
              <img src={pic5} alt="profile picture" />
            </span>
            <span className="avatar">
              <img src={pic6} alt="profile picture" />
            </span>
          </div>
        </div>
        <div className="skills__cards--item">
          <div className="skills__cards--header">
            <h3>User interface (UI)</h3>
            <p>7</p>
          </div>
          <div className="avatars">
            <span className="avatar">
              <img src={pic7} alt="profile picture" />
            </span>
            <span className="avatar">
              <img src={pic2} alt="profile picture" />
            </span>
            <span className="avatar">
              <img src={pic8} alt="profile picture" />
            </span>
            <span className="avatar">
              <img src={pic9} alt="profile picture" />
            </span>
            <span className="avatar">
              <img src={pic5} alt="profile picture" />
            </span>
            <span className="avatar">
              <img src={pic10} alt="profile picture" />
            </span>
          </div>
        </div>
        <div className="skills__cards--item">
          <div className="skills__cards--header">
            <h3>Brand Identity (UX)</h3>
            <p>5</p>
          </div>
          <div className="avatars">
            <span className="avatar">
              <img src={pic11} alt="profile picture" />
            </span>
            <span className="avatar">
              <img src={pic1} alt="profile picture" />
            </span>
            <span className="avatar">
              <img src={pic4} alt="profile picture" />
            </span>
            <span className="avatar">
              <img src={pic3} alt="profile picture" />
            </span>
            <span className="avatar">
              <img src={pic12} alt="profile picture" />
            </span>
          </div>
        </div>
      </div>
      <a>SHOW ALL (17)</a>
    </section>
  );
};

export default Skills;
