import { useEffect, useState } from "react";

export default function Home() {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL)
      .then(res => res.json())
      .then(data => setPortfolio(data))
      .catch(err => console.error("Error fetching portfolio:", err));
  }, []);

  if (!portfolio) return <p>Loading...</p>;

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "2rem" }}>
      <h1>{portfolio.name}</h1>
      <p>{portfolio.about}</p>

      <section style={{ marginTop: "2rem" }}>
        <h2>Skills</h2>
        <ul>
          {Array.isArray(portfolio.skills)
            ? portfolio.skills.map(skill => <li key={skill}>{skill}</li>)
            : <li>No skills listed</li>}
        </ul>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>Projects</h2>
        {Array.isArray(portfolio.projects)
          ? portfolio.projects.map(project => (
              <div key={project.title} style={{ marginBottom: "1rem" }}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer">
                  View Project
                </a>
              </div>
            ))
          : <p>No projects available</p>}
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>Contact</h2>
        <p>Email: <a href={`mailto:${portfolio.contact.email}`}>{portfolio.contact.email}</a></p>
        <p>GitHub: <a href={portfolio.contact.github} target="_blank" rel="noreferrer">{portfolio.contact.github}</a></p>
        <p>LinkedIn: <a href={portfolio.contact.linkedin} target="_blank" rel="noreferrer">{portfolio.contact.linkedin}</a></p>
      </section>
    </div>
  );
}

