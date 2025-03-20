import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/PostJob.css";

function PostJob() {
  const [job, setJob] = useState({ title: "", company: "", location: "", description: "" });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  return (
    <div className="postjob-container d-flex justify-content-center align-items-center">
      <div className="postjob-card glassmorphism p-5">
        <h2 className="text-gradient text-center mb-4">📌 Post a New Job</h2>

        <form className="row g-3">
          <div className="col-12">
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Job Title"
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12">
            <input
              type="text"
              name="company"
              className="form-control"
              placeholder="Company Name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12">
            <input
              type="text"
              name="location"
              className="form-control"
              placeholder="Location"
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12">
            <textarea
              name="description"
              className="form-control"
              placeholder="Job Description"
              rows="4"
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="col-12 text-center">
            <button type="submit" className="btn postjob-button w-100">
              🚀 Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostJob;
