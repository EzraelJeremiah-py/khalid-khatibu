import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    fetch("https://khalid-khatibu.onrender.com/api/portfolio")
      .then(res => res.json())
      .then(data => setPortfolio(data))
      .catch(err => console.error("Error fetching portfolio:", err));
  }, []);

  if (!portfolio) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", background: "linear-gradient(to right, #f8f9fa, #e9ecef)", minHeight: "100vh" }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">{portfolio.name}</a>
        </div>
      </nav>

      <div className="container py-5">
        {/* About */}
        <div className="card mb-4 border-0 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-primary">About</h2>
            <p className="card-text lead">{portfolio.about}</p>
          </div>
        </div>

        {/* Qualifications */}
        <div className="card mb-4 border-0 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-primary">Qualifications</h2>
            <ul className="list-group list-group-flush">
              {Array.isArray(portfolio.qualifications)
                ? portfolio.qualifications.map((q, i) => (
                    <li key={i} className="list-group-item">{q}</li>
                  ))
                : <li className="list-group-item">No qualifications listed</li>}
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className="card mb-4 border-0 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-primary">Skills</h2>
            <div className="d-flex flex-wrap gap-2">
              {Array.isArray(portfolio.skills)
                ? portfolio.skills.map(skill => (
                    <span key={skill} className="badge bg-gradient bg-info text-dark p-2">{skill}</span>
                  ))
                : <p>No skills listed</p>}
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="card mb-4 border-0 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-primary">Projects</h2>
            {Array.isArray(portfolio.projects)
              ? portfolio.projects.map(project => (
                  <div key={project.title} className="mb-3 p-3 border rounded bg-light">
                    <h5 className="fw-bold">{project.title}</h5>
                    <p>{project.description}</p>
                  </div>
                ))
              : <p>No projects available</p>}
          </div>
        </div>

        {/* Contact */}
        <div className="card mb-4 border-0 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-primary">Contact</h2>
            <p>Email: <a href={`mailto:${portfolio.contact.email}`} className="text-decoration-none">{portfolio.contact.email}</a></p>
            <p>Phone: <a href={`tel:${portfolio.contact.phone}`} className="text-decoration-none">{portfolio.contact.phone}</a></p>
            <p>GitHub: <a href={portfolio.contact.github} target="_blank" rel="noreferrer" className="text-decoration-none">{portfolio.contact.github}</a></p>
            <p>LinkedIn: <a href={portfolio.contact.linkedin} target="_blank" rel="noreferrer" className="text-decoration-none">{portfolio.contact.linkedin}</a></p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-3 mt-auto shadow">
        <small>&copy; {new Date().getFullYear()} {portfolio.name} — All Rights Reserved</small>
      </footer>
    </div>
  );
}
