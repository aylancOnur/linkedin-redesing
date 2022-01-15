import "./dashboard.scss";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="dashboard__header">
        <h3>YOUR DASHBOARD</h3>
        <a>GO TO STATS</a>
      </div>
      <hr />
      <div className="dashboard__statistics">
        <h2>367</h2>
        <p>views today</p>
      </div>
      <div className="dashboard__statistics">
        <h2>15</h2>
        <p>post views</p>
      </div>
      <div className="dashboard__statistics">
        <h2>9</h2>
        <p>search appereances</p>
      </div>
    </section>
  );
};

export default Dashboard;
