import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/JobDetails.css";

const jobData = {
  1: { 
    title: "Frontend Developer", 
    company: "Google", 
    location: "Remote", 
    description: "React & Bootstrap required." 
  },
  2: { 
    title: "Backend Engineer", 
    company: "Amazon", 
    location: "New York", 
    description: "Node.js & MongoDB required." 
  },
};

function JobDetails() {
  const { id } = useParams();
  const job = jobData[id];

  return (
    <div className="job-details-container d-flex justify-content-center align-items-center">
      <div className="job-details-card glassmorphism p-4">
        <h2 className="text-gradient text-center mb-3">{job.title}</h2>
        <h4 className="company-name text-center">{job.company} - {job.location}</h4>
        <p className="job-description">{job.description}</p>
        
        <div className="text-center mt-4">
          <button className="btn apply-button">Apply Now</button>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
