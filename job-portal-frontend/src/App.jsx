import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import JobList from "./pages/JobList";
import JobDetails from "./pages/JobDetails";
import Dashboard from "./pages/Dashboard";
import PostJob from "./pages/PostJob";
import ApplyJob from "./pages/ApplyJob";
import Navbar from "./components/Navbar";
import EmployerDashboard from "./pages/EmployerDashboard";
import Contact from "./pages/Contact";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
   
        <Route path="/jobs" element={<JobList />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/apply-job" element={<ApplyJob />} />
        <Route path="/employer-dashboard" element={<EmployerDashboard />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
