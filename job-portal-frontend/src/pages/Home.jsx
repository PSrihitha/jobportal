import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="glass-card">
        <h1>
          Discover <span className="highlight">Your Next Career Move</span>
        </h1>
        <p>Unlock new job opportunities and take your career to the next level.</p>
        <div className="buttons">
          <Link to="/jobs" className="btn explore-btn">🚀 Explore Jobs</Link>
          <Link to="/post-job" className="btn post-btn">💼 Post a Job</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
