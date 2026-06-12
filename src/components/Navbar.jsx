function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        padding: "20px 40px",
        boxSizing: "border-box",
        backgroundColor: "#081225",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: "0",
        zIndex: "1000",
      }}
    >
      {/* LOGO */}

      <h1
        style={{
          color: "white",
          fontSize: "35px",
          fontWeight: "bold",
        }}
      >
        PORTFOLIO
        <span style={{ color: "#22d3ee" }}>.</span>
      </h1>

      {/* MENU */}

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}

      >
        <a href="#home" style={linkStyle}>
           Home
        </a>
        
        <a href="#education" style={linkStyle}>
          Education
        </a>

        <a href="#certifications" style={linkStyle}>
          Certifications
        </a>

        <a href="#about" style={linkStyle}>
          About Me
        </a>

        <a href="#skills" style={linkStyle}>
          Skills
        </a>

        <a href="#projects" style={linkStyle}>
          Projects
        </a>

        <a href="#contact">
          <button
            style={{
              padding: "12px 24px",
              borderRadius: "12px",
              border: "none",
              backgroundColor: "#22d3ee",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Contact Me
          </button>
        </a>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "17px",
};

export default Navbar;