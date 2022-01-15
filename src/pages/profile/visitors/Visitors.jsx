import "./visitors.scss";
import pic13 from "../../../assets/profile__picture/pic13.png";
import pic14 from "../../../assets/profile__picture/pic14.png";
import pic15 from "../../../assets/profile__picture/pic15.png";
import pic16 from "../../../assets/profile__picture/pic16.png";
import pic17 from "../../../assets/profile__picture/pic17.png";

const Visitors = () => {
  return (
    <section className="visitors">
      <div className="visitors__header">
        <h3>VISITORS</h3>
        <a>VIEW ALL</a>
      </div>
      <hr />
      <div className="visitors__info">
        <img src={pic13} alt="visitor's picture" />
        <div className="visitors__info--content">
          <h3>Darlane Black</h3>
          <p>HR-manager, 10,000 connec...</p>
        </div>
      </div>
      <div className="visitors__info">
        <img src={pic14} alt="visitor's picture" />
        <div className="visitors__info--content">
          <h3>Theresa Steward</h3>
          <p>IOS Developer</p>
        </div>
      </div>
      <div className="visitors__info">
        <img src={pic15} alt="visitor's picture" />
        <div className="visitors__info--content">
          <h3>Brandon Wilson</h3>
          <p>Senior UX Designer</p>
        </div>
      </div>
      <div className="visitors__info">
        <img src={pic16} alt="visitor's picture" />
        <div className="visitors__info--content">
          <h3>Kyle Fisher</h3>
          <p>Product designer at Com...</p>
        </div>
      </div>
      <div className="visitors__info">
        <img src={pic17} alt="visitor's picture" />
        <div className="visitors__info--content">
          <h3>Audrey Alexander</h3>
          <p>Team lead at Google</p>
        </div>
      </div>
    </section>
  );
};

export default Visitors;
