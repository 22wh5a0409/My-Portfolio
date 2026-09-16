```jsx
function Certifications() {
  const cardStyle = {
    background:
      "linear-gradient(180deg, rgba(17, 28, 53, 0.95), rgba(14, 21, 41, 0.95))",
    border: "1px solid rgba(34, 211, 238, 0.18)",
    boxShadow: "0 18px 40px rgba(249, 249, 249, 0.15)",
    borderRadius: "22px",
    padding: "26px",
  };

  const items = [
    {
      title: "Cybersecurity Fundamentals",
      org: "IBM",
      date: "Nov 2023",
      desc: "Security basics, threats, and protection concepts.",
    },
    {
      title: "VLSI Soc Design HDL",
      org: "Maven Silicon",
      date: "Dec 2022 - Feb 2023",
      desc: "Verilog HDL, digital design and VLSI fundamentals.",
    },
    {
      title: "Embedded Systems",
      org: "EMERTXE",
      date: "Aug 2023 - Oct 2023",
      desc: "Microcontrollers, hardware interfacing, and embedded concepts.",
    },
    {
      title: "BFSI Sector Skill Development Program",
      org: "Industry Program",
      date: "2025 - 2026",
      desc: "Banking, finance, and professional skill development.",
    },
    {
      title: "Cisco Network Support and Security",
      org: "Cisco",
      date: "Aug 2026",
      desc: "Network support, security fundamentals, and troubleshooting concepts.",
      link: "/certificates/Cisco-Network-Support-and-Security.pdf",
    },
  ];

  return (
    <section
      id="certifications"
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
          Certifications<span style={{ color: "#22d3ee" }}>.</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "28px",
          }}
        >
          {items.map((item) => (
            <article key={item.title} style={cardStyle}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "12px",
                  marginBottom: "18px",
                }}
              >
                <div>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.65)",
                      fontSize: "14px",
                    }}
                  >
                    {item.org}
                  </div>

                  <div
                    style={{
                      color: "rgba(255,255,255,0.55)",
                      fontSize: "13px",
                      marginTop: "4px",
                    }}
                  >
                    {item.date}
                  </div>
                </div>

                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "14px",
                    background: "#22d3ee",
                    display: "grid",
                    placeItems: "center",
                    color: "#081225",
                    fontWeight: 900,
                  }}
                >
                  ✓
                </div>
              </div>

              <h3
                style={{
                  color: "white",
                  fontSize: "22px",
                  lineHeight: 1.25,
                  margin: "0 0 12px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {item.desc}
              </p>

              {item.link && (
                <div
                  style={{
                    marginTop: "20px",
                  }}
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      color: "#22d3ee",
                      fontWeight: 700,
                      fontSize: "14px",
                      textDecoration: "none",
                      padding: "8px 14px",
                      border: "1px solid rgba(34, 211, 238, 0.35)",
                      borderRadius: "8px",
                      transition: "all 0.3s ease",
                    }}
                  >
                    View Certificate →
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
```
