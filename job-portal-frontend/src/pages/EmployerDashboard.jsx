import { useState } from "react";

const postedJobsData = [
  { id: 1, title: "React Developer", location: "Remote", applicants: 10 },
  { id: 2, title: "Node.js Engineer", location: "San Francisco", applicants: 15 },
];

function EmployerDashboard() {
  const [jobs, setJobs] = useState(postedJobsData);

  const deleteJob = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-gradient">Employer Dashboard</h2>
      <p>Manage your posted jobs here.</p>
      <div className="job-list">
        {jobs.map((job) => (
          <div key={job.id} className="glass-card">
            <h3>{job.title}</h3>
            <p>Location: {job.location}</p>
            <p>Applicants: {job.applicants}</p>
            <button onClick={() => deleteJob(job.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployerDashboard;
