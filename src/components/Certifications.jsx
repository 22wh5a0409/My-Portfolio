
import React from "react";
import "./Certifications.css";

const certifications = [
  {
    id: 1,
    issuer: "IBM",
    date: "Nov 2023",
    title: "Cybersecurity Fundamentals",
    description:
      "Security basics, threats and protection concepts.",
    file: "/certificates/IBM_cybersecurity%20Fundamentals.jpeg",
  },
  {
    id: 2,
    issuer: "Maven Silicon",
    date: "Dec 2022 - Feb 2023",
    title: "VLSI Soc Design HDL",
    description:
      "Verilog HDL, digital design and VLSI fundamentals.",
    file:
      "/certificates/Maven%20Silicon_VLSI%20Soc%20Design%20Verilog-HDL.jpeg",
  },
  {
    id: 3,
    issuer: "EMERTXE",
    date: "Aug 2023 - Oct 2023",
    title: "Embedded Systems",
    description:
      "Microcontrollers, hardware interfacing and embedded concepts.",
    file: "/certificates/Emertxe_Embedded%20Systems.jpeg",
  },
  {
    id: 4,
    issuer: "Industry Program",
    date: "2025 - 2026",
    title: "BFSI Sector Skill Development Program",
    description:
      "Banking, finance and professional skill development.",
    file: "/certificates/BFSI_%20Accelerated%20Program%20.pdf",
  },
  {
    id: 5,
    issuer: "Cisco",
    date: "Aug 2026",
    title: "Cisco Network Support and Security",
    description:
      "Network support, security fundamentals and troubleshooting concepts.",
    file:
      "/certificates/Cisco_Network%20Support%20and%20Security.pdf",
  },
];

const Certifications = () => {
  return (
    <section className="certifications" id="certifications">
      <div className="certifications-container">

        {/* Section Heading */}
        <h2 className="section-title">
          Certifications<span>.</span>
        </h2>

        {/* Certification Cards */}
        <div className="certifications-grid">

          {certifications.map((cert) => (
            <div className="certificate-card" key={cert.id}>

              {/* Issuer and Date */}
              <div className="certificate-header">
                <div className="certificate-meta">
                  <p className="certificate-issuer">
                    {cert.issuer}
                  </p>

                  <p className="certificate-date">
                    {cert.date}
                  </p>
                </div>

                {/* Completed Icon */}
                <div className="certificate-check">
                  ✓
                </div>
              </div>

              {/* Certificate Information */}
              <div className="certificate-content">
                <h3>{cert.title}</h3>

                <p className="certificate-description">
                  {cert.description}
                </p>

                {/* View Certificate */}
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-certificate"
                  aria-label={`View ${cert.title} certificate`}
                >
                  View Certificate
                  <span> ↗</span>
                </a>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Certifications;



