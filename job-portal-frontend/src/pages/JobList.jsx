import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/JobList.css";

const jobs = [
  { id: 1, title: "Frontend Developer", company: "Google", location: "Remote" },
  { id: 2, title: "Backend Engineer", company: "Amazon", location: "New York" },
];

function JobList() {
  return (
    <div className="job-list-container d-flex justify-content-center align-items-center">
      <div className="job-list-card glassmorphism p-5">
        <h2 className="text-gradient text-center mb-4">🚀 Explore Exciting Jobs</h2>

        <div className="job-list">
          {jobs.map((job) => (
            <div key={job.id} className="job-card glass-card p-4">
              <h3 className="job-title">{job.title}</h3>
              <p className="job-company">{job.company} - {job.location}</p>
              <Link to={`/jobs/${job.id}`}>
                <button className="btn view-button">🔍 View Details</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobList;
