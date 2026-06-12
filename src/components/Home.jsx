import homeImage from "../assets/home.png";

function Home() {
  return (
    <section
      id="home"
      style={{
        backgroundColor: "#081225",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "60px 80px",
        color: "white",
      }}
    >
      {/* LEFT SIDE */}

      <div style={{ maxWidth: "600px" }}>
        <h1
          style={{
            fontSize: "75px",
            lineHeight: "1.2",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Hi, I'm <br />
          <span style={{ color: "#22d3ee" }}>Kumari👋</span>
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            lineHeight: "1.8",
            fontSize: "18px",
            marginBottom: "35px",
          }}
        >
         Electronics and Communication Engineering Student
         Passionate about Software Development,
         Data Analytics, and Technology-Driven Innovation. 
         Building practical solutions through programming,
         machine learning, and engineering projects.
        </p>

        {/* BUTTONS */}

        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          {/* HIRE ME BUTTON */}

          <a href="#contact">
            <button
              style={{
                padding: "15px 35px",
                borderRadius: "30px",
                border: "none",
                backgroundColor: "#22d3ee",
                color: "white",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
                boxShadow: "0 0 20px rgba(34,211,238,0.5)",
              }}
            >
              Hire Me
            </button>
          </a>

          {/* DOWNLOAD RESUME BUTTON */}

          <a
            href="/resume.pdf"
            download
            style={{
              textDecoration: "none",
            }}
          >
            <button
              style={{
                padding: "15px 35px",
                borderRadius: "30px",
                border: "2px solid #22d3ee",
                backgroundColor: "transparent",
                color: "#22d3ee",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Download Resume
            </button>
          </a>
        </div>
      </div>

      {/* RIGHT SIDE */}

      <div
        style={{
          width: "430px",
          height: "430px",
          backgroundColor: "#06b6d4",
          borderRadius: "58% 42% 65% 35% / 40% 45% 55% 60%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "5px solid #0ea5e9",
          boxShadow: "0 0 40px rgba(34,211,238,0.4)",
        }}
      >
        <img
          src={homeImage}
          alt="hero"
          style={{
            width: "360px",
            height: "360px",
            objectFit: "cover",
          }}
        />
      </div>
    </section>
  );
}

export default Home;