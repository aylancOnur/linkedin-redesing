import "./education.scss";
import university from "../../../assets/university.png";

const Education = () => {
  return (
    <section className="education">
      <h2>Education</h2>
      <div className="education__container">
        <img src={university} alt="university logo" />
        <div className="education__container--content">
          <h3>Moscow State Linguistic University</h3>
          <p>
            Bachelor's degree Field Of StudyComputer and Information Systems
            Security/Information Assurance
          </p>
          <p>2013 - 2017</p>
          <p>Additional English classes and UX profile courses​.</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
