import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Dashboard.css";

const appliedJobs = [
  { id: 1, title: "Frontend Developer", company: "Google", status: "Pending" },
  { id: 2, title: "Backend Engineer", company: "Amazon", status: "Shortlisted" },
];

function Dashboard() {
  return (
    <div className="dashboard-container d-flex justify-content-center align-items-center">
      <div className="dashboard-card glassmorphism p-5">
        <h2 className="text-gradient text-center mb-4">📊 Your Job Dashboard</h2>
        <p className="subtext text-center">Track your job applications in real-time.</p>

        <div className="job-list">
          {appliedJobs.map((job) => (
            <div key={job.id} className="job-card p-4">
              <h3 className="job-title">{job.title}</h3>
              <p className="company-name">{job.company}</p>
              <p className="status">
                Status: <span className={`status-badge ${job.status.toLowerCase()}`}>{job.status}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
