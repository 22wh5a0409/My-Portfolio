function Projects() {
  const cardStyle = {
    background:
      "linear-gradient(180deg, rgba(17, 28, 53, 0.95), rgba(14, 21, 41, 0.95))",
    border: "1px solid rgba(34, 211, 238, 0.18)",
    boxShadow: "0 18px 40px rgba(244, 242, 242, 0.24)",
    borderRadius: "24px",
    padding: "28px",
  };

  const projects = [
    {
      title: "Personalized Financial Advisory System",
      desc: "ML-based advisory system using Python, Flask, Pandas, NumPy and Scikit-learn for personalized recommendations.",
      tag: "Mechine Learning",
    },
    {
      title: "Loan Analysis Dashboard",
      desc: "Interactive Power BI dashboard to visualize loan distribution, defaults and high-risk customers.",
      tag: "Data Analysis",
    },
    {
      title: "SIW Antenna for THz Applications",
      desc: "Substrate Integrated Waveguide antenna design for next-generation 6G/THz applications.",
      tag: "Antennas",
    },
    {
      title: "Flexible Multi-Band Antenna",
      desc: "Bio-inspired flexible antenna design for satellite communication, SAR imaging and 5.5G studies.",
      tag: "Antennas",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        background: "#081225",
        padding: "80px 40px 100px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <h2
          style={{
            margin: "0 0 40px",
            fontSize: "clamp(42px, 5vw, 68px)",
            lineHeight: 1,
            fontWeight: 800,
            color: "white",
          }}
        >
          Projects<span style={{ color: "#22d3ee" }}>.</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "28px",
          }}
        >
          {projects.map((project) => (
            <article key={project.title} style={cardStyle}>
              <div
                style={{
                  display: "inline-block",
                  border: "1px solid #22d3ee",
                  color: "#22d3ee",
                  padding: "6px 12px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: 800,
                  marginBottom: "18px",
                }}
              >
                {project.tag}
              </div>

              <h3
                style={{
                  color: "white",
                  fontSize: "22px",
                  lineHeight: 1.25,
                  margin: "0 0 12px",
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  color: "rgba(255,255,255,0.72)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {project.desc}
              </p>

              <div
                style={{
                  marginTop: "22px",
                  color: "#22d3ee",
                  fontWeight: 800,
                  fontSize: "14px",
                }}
              >
               
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;