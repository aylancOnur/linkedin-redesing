import "./footer.scss";
import logo from "../../assets/Logo.png";
import help from "../../assets/help.png";
import settings from "../../assets/settings.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="logo" />
        <p>
          Linked<span>In</span>
        </p>
      </div>
      <div className="footer__navigation">
        <h4>Navigation</h4>
        <div className="footer__navigation--items">
          <div className="footer__navigation--left">
            <h6>About</h6>
            <h6>Careers</h6>
            <h6>Advertising</h6>
            <h6>Small Business</h6>
          </div>
          <div className="footer__navigation--mid">
            <h6>Talent Solutions</h6>
            <h6>Marketing Solutions</h6>
            <h6>Sales Solutions</h6>
            <h6>Safery Center</h6>
          </div>
          <div className="footer__navigation--right">
            <h6>Community Guidelines</h6>
            <h6>Privacy & Terms</h6>
            <h6>Mobile App</h6>
          </div>
        </div>
      </div>
      <div className="footer__access">
        <h4>Fast access</h4>
        <button className="footer__access--button">
          QUESTIONS?
          <span>
            <img src={help} alt="help" />
          </span>
        </button>
        <button className="footer__access--button outline">
          SETTINGS
          <span>
            <img src={settings} alt="settings" />
          </span>
        </button>
      </div>
      <div className="footer__language">
        <h4>Language</h4>
        <select>
          <option value="0">ENGLISH</option>
          <option value="1">TURKISH</option>
          <option value="2">SPANISH</option>
        </select>
      </div>
    </footer>
  );
};

export default Footer;
