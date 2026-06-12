import educationImage from "../assets/education.png";

function Education() {
  const cardStyle = {
    background:
      "linear-gradient(180deg, rgba(17, 28, 53, 0.95), rgba(14, 21, 41, 0.95))",
    border: "1px solid rgba(34, 211, 238, 0.18)",
    boxShadow: "0 18px 40px rgba(235, 221, 221, 0.22)",
    borderRadius: "24px",
    padding: "28px",
  };

  return (
    <section
      id="education"
      style={{
        background: "#081225",
        padding: "80px 40px 100px",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        {/* TITLE */}

        <h2
          style={{
            margin: "0 0 40px",
            fontSize: "60px",
            lineHeight: 1,
            fontWeight: 800,
            color: "white",
          }}
        >
          Education
          <span style={{ color: "#22d3ee" }}>.</span>
        </h2>

        {/* MAIN GRID */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.8fr 1.2fr",
            gap: "36px",
            alignItems: "stretch",
          }}
        >
          {/* LEFT IMAGE SECTION */}

          <div
            style={{
              borderRadius: "20px",
              border: " rgba(255, 255, 255, 0.2)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100%",
              
            }}
          >
            <img
              src={educationImage}
              alt="Education"
              style={{
                width: "80%",
                maxWidth: "350px",
                maxHeight: "650px",
                objectFit: "contain",
              }}
            />
          </div>

          {/* RIGHT SIDE CARDS */}

          <div
            style={{
              display: "grid",
              gap: "28px",
            }}
          >
            {/* BTECH */}

            <div style={cardStyle}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "20px",
                }}
              >
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: "800",
                    }}
                  >
                    B.Tech in Electronics & Communication Engineering
                  </div>

                  <div
                    style={{
                      color: "#22d3ee",
                      marginTop: "8px",
                    }}
                  >
                    BVRIT Hyderabad College of Engineering for Women
                  </div>
                </div>

                <div
                  style={{
                    border: "1px solid #22d3ee",
                    color: "#22d3ee",
                    borderRadius: "999px",
                    padding: "8px 16px",
                    fontWeight: "700",
                    whiteSpace: "nowrap",
                  }}
                >
                  2022 - 2026
                </div>
              </div>
            </div>

            {/* DIPLOMA */}

            <div style={cardStyle}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "20px",
                }}
              >
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: "800",
                    }}
                  >
                    Diploma in Electronics & Communication Engineering
                  </div>

                  <div
                    style={{
                      color: "#22d3ee",
                      marginTop: "8px",
                    }}
                  >
                    Government Polytechnic for Women
                  </div>
                </div>

                <div
                  style={{
                    border: "1px solid #22d3ee",
                    color: "#22d3ee",
                    borderRadius: "999px",
                    padding: "8px 16px",
                    fontWeight: "700",
                    whiteSpace: "nowrap",
                  }}
                >
                  2019 - 2022
                </div>
              </div>
            </div>

            {/* SCHOOL */}

            <div style={cardStyle}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "20px",
                }}
              >
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: "800",
                    }}
                  >
                    Secondary School Education
                  </div>

                  <div
                    style={{
                      color: "#22d3ee",
                      marginTop: "8px",
                    }}
                  >
                    Sri Sai Ram High School
                  </div>
                </div>

                <div
                  style={{
                    border: "1px solid #22d3ee",
                    color: "#22d3ee",
                    borderRadius: "999px",
                    padding: "8px 16px",
                    fontWeight: "700",
                    whiteSpace: "nowrap",
                  }}
                >
                  2018 - 2019
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;