function Skills() {
  const cardStyle = {
    background:
      "linear-gradient(180deg, rgba(17, 28, 53, 0.95), rgba(14, 21, 41, 0.95))",
    border: "1px solid rgba(34, 211, 238, 0.18)",
    boxShadow: "0 18px 40px rgba(241, 236, 236, 0.22)",
    borderRadius: "24px",
    padding: "28px",
  };

  const skillCategories = [
    {
      title: "Programming",
      skills: ["C++", "Python", "Verilog HDL"],
    },
    {
      title: "Core CS Skills",
      skills: [
        "Object-Oriented Programming (OOP)",
        "Operating Systems",
        "Computer Networks",
      ],
    },
    {
      title: "Frameworks & Tools",
      skills: ["Flask", "NumPy", "Pandas", "Scikit-learn"],
    },
    {
      title: "Database",
      skills: ["SQL"],
    },
    {
      title: "Data Visualization",
      skills: ["Power BI"],
    },
    {
      title: "Hardware & Design Tools",
      skills: [
        "MATLAB",
        "CST Studio",
        "Xilinx Vivado IDE",
        "Keil µVision",
        "Verilog HDL",
      ],
    },
    {
      title: "Core ECE Areas",
      skills: ["VLSI", "Antennas", "Communication Systems"],
    },
    {
      title: "Soft Skills",
      skills: [
        "Leadership",
        "Time Management",
        "Adaptability",
        "Teamwork",
      ],
    },
  ];

  return (
    <section
      id="skills"
      style={{
        background: "#081225",
        padding: "80px 40px 100px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: "800",
            marginBottom: "50px",
            color: "#ffffff",
          }}
        >
          My <span style={{ color: "#22d3ee" }}>Skills</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "25px",
          }}
        >
          {skillCategories.map((category) => (
            <div key={category.title} style={cardStyle}>
              <h3
                style={{
                  color: "#22d3ee",
                  marginBottom: "18px",
                  fontSize: "22px",
                  fontWeight: "700",
                }}
              >
                {category.title}
              </h3>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      background: "rgba(34, 211, 238, 0.12)",
                      border: "1px solid rgba(34, 211, 238, 0.25)",
                      color: "#ffffff",
                      padding: "10px 14px",
                      borderRadius: "999px",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;