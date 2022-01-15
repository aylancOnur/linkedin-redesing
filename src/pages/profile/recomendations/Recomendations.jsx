import "./recomendations.scss";
import video1 from "../../../assets/video1.png";
import video2 from "../../../assets/video2.png";
import video3 from "../../../assets/video3.png";

const Recomendations = () => {
  return (
    <section className="recomendations">
      <div className="recomendations__header">
        <h3>YOU MAY LIKE THESE COURSES</h3>
      </div>
      <hr />
      <div className="recomendations__videos">
        <img src={video1} alt="video" />
        <div className="recomendations__videos--content">
          <h2>UX Foundations: Prototyping</h2>
          <p>27,959 viewers</p>
        </div>
      </div>
      <div className="recomendations__videos">
        <img src={video2} alt="video" />
        <div className="recomendations__videos--content">
          <h2>Designing with Adobe XD and pro</h2>
          <p>9,122 viewers</p>
        </div>
      </div>
      <div className="recomendations__videos">
        <img src={video3} alt="video" />
        <div className="recomendations__videos--content">
          <h2>UX Foundations: Styles and GUIs</h2>
          <p>13,858 viewers</p>
        </div>
      </div>
      <a>SEE ALL RECOMENDATIONS</a>
    </section>
  );
};

export default Recomendations;
