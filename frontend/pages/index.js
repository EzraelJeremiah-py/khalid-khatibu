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
    <div className="container mt-4">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{portfolio.name}</a>
        </div>
      </nav>

      {/* About */}
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">About</h2>
          <p className="card-text">{portfolio.about}</p>
        </div>
      </div>

      {/* Skills */}
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">Skills</h2>
          <ul className="list-group list-group-flush">
            {Array.isArray(portfolio.skills)
              ? portfolio.skills.map(skill => (
                  <li key={skill} className="list-group-item">{skill}</li>
                ))
              : <li className="list-group-item">No skills listed</li>}
          </ul>
        </div>
      </div>

      {/* Projects */}
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">Projects</h2>
          {Array.isArray(portfolio.projects)
            ? portfolio.projects.map(project => (
                <div key={project.title} className="mb-3">
                  <h5>{project.title}</h5>
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                    View Project
                  </a>
                </div>
              ))
            : <p>No projects available</p>}
        </div>
      </div>

      {/* Contact */}
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">Contact</h2>
          <p>Email: <a href={`mailto:${portfolio.contact.email}`}>{portfolio.contact.email}</a></p>
          <p>GitHub: <a href={portfolio.contact.github} target="_blank" rel="noreferrer">{portfolio.contact.github}</a></p>
          <p>LinkedIn: <a href={portfolio.contact.linkedin} target="_blank" rel="noreferrer">{portfolio.contact.linkedin}</a></p>
        </div>
      </div>
    </div>
  );
}
