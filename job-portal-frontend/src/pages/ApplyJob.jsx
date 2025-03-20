import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ApplyJob.css";

function ApplyJob() {
  const [application, setApplication] = useState({ name: "", email: "", resume: "" });

  const handleChange = (e) => {
    setApplication({ ...application, [e.target.name]: e.target.value });
  };

  return (
    <div className="apply-container d-flex justify-content-center align-items-center">
      <div className="apply-card glassmorphism p-4">
        <h2 className="text-gradient text-center mb-4">Apply for this Job</h2>

        <form className="apply-form">
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Upload Resume</label>
            <input
              type="file"
              name="resume"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn apply-button w-100">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ApplyJob;
