import "./tabs.scss"

const Tabs = () => {
  return (
    <section className="tabs">
      <button className="tabs__button active">PROFILE</button>
      <button className="tabs__button">ACTIVITY & INTERESTS</button>
      <button className="tabs__button">ARTICLES (3)</button>
    </section>
  );
};

export default Tabs;
