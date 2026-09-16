import aboutImage from "../assets/about.png";

function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#081225",
        color: "white",
        padding: "100px 80px",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "60px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT SIDE */}

        <div
          style={{
            flex: "1",
            minWidth: "350px",
          }}
        >
          <h1
            style={{
              fontSize: "65px",
              marginBottom: "30px",
              lineHeight: "1.2",
            }}
          >
            More <span style={{ color: "#06b6d4" }}>About</span> Me
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "1.9",
              fontSize: "18px",
              marginBottom: "20px",
            }}
          >
            I'm an Electronics and Communication Engineering undergraduate
            passionate about software development, data analytics, and
            technology-driven innovation. I am continuously learning,
            exploring new technologies, and preparing for a successful
            career in software engineering and technology.
          </p>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "1.9",
              fontSize: "18px",
              marginBottom: "40px",
            }}
          >
            Skilled in Python, SQL, Flask, Machine Learning, Frontend
            Development, and Antenna Design. I enjoy building innovative
            projects and solving real-world engineering problems through
            technology and creativity.
          </p>

          {/* STATS */}

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                backgroundColor: "#111c44",
                padding: "25px",
                borderRadius: "15px",
                width: "140px",
                textAlign: "center",
              }}
            >
              <h2 style={{ color: "#06b6d4", margin: 0 }}>4+</h2>
              <p>Certificates</p>
            </div>

            <div
              style={{
                backgroundColor: "#111c44",
                padding: "25px",
                borderRadius: "15px",
                width: "140px",
                textAlign: "center",
              }}
            >
              <h2 style={{ color: "#06b6d4", margin: 0 }}>4+</h2>
              <p>Projects</p>
            </div>

            <div
              style={{
                backgroundColor: "#111c44",
                padding: "25px",
                borderRadius: "15px",
                width: "140px",
                textAlign: "center",
              }}
            >
              <h2 style={{ color: "#06b6d4", margin: 0 }}>2025</h2>
              <p>Graduate</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div
          style={{
            flex: "1",
            minWidth: "350px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              backgroundColor: "#06b6d4",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 0 40px rgba(236, 242, 244, 0.13)",
            }}
          >
            <img
              src={aboutImage}
              alt="About"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
