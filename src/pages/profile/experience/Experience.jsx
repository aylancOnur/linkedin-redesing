import "./experience.scss";
import world from "../../../assets/world.png";
import up from "../../../assets/up.png";

const Experience = () => {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="experience__info">
        <img src={world} alt="world" />
        <div className="experience__info--content">
          <h3>Freelance UX / UI designer</h3>
          <div className="info__p--tags">
            <p className="info__p--tags-one">Self Employed</p>
            <p className="info__p--tags-two">Around the world</p>
          </div>
          <div className="info__p--tags-second">
            <p className="info__p--tags-second-one">Jun 2016 - Present</p>
            <p className="info__p--tags-second-two">3 yrs 3 mos</p>
          </div>
          <p>
            Work with clients and web studios as freelancer. Work in next areas:
            eCommerce web projects; creative landing pages; iOs and Android
            apps; corporate web sites and corporate identity sometimes.
          </p>
        </div>
      </div>
      <hr />
      <div className="experience__info">
        <img src={up} alt="up" />
        <div className="experience__info--content">
          <h3>UX / UI designer</h3>
          <div className="info__p--tags">
            <p className="info__p--tags-one">Upwork</p>
            <p className="info__p--tags-two">International</p>
          </div>
          <div className="info__p--tags-second">
            <p className="info__p--tags-second-one">Jun 2019 - Present</p>
            <p className="info__p--tags-second-two">3 mos</p>
          </div>
          <p>
            New experience with Upwork system. Work in next areas: UX/UI design,
            graphic design, interaction design, UX research.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
