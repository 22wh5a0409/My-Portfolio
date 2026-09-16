
import React from "react";
import "./Certifications.css";

const certifications = [
  {
    title: "Cisco Network Support and Security",
    issuer: "Cisco",
    image: "/certificates/Cisco_Network%20Support%20and%20Security.pdf",
    certificate:
      "/certificates/Cisco_Network%20Support%20and%20Security.pdf",
  },
  {
    title: "Emertxe Embedded Systems",
    issuer: "Emertxe",
    image: "/certificates/Emertxe_Embedded%20Systems.jpeg",
    certificate:
      "/certificates/Emertxe_Embedded%20Systems.jpeg",
  },
  {
    title: "IBM Cybersecurity Fundamentals",
    issuer: "IBM",
    image: "/certificates/IBM_cybersecurity%20Fundamentals.jpeg",
    certificate:
      "/certificates/IBM_cybersecurity%20Fundamentals.jpeg",
  },
  {
    title: "VLSI SoC Design using Verilog-HDL",
    issuer: "Maven Silicon",
    image:
      "/certificates/Maven%20Silicon_VLSI%20Soc%20Design%20Verilog-HDL.jpeg",
    certificate:
      "/certificates/Maven%20Silicon_VLSI%20Soc%20Design%20Verilog-HDL.jpeg",
  },
  {
    title: "BFSI Sector Skill Development Program",
    issuer: "BFSI",
    image: "/certificates/BFSI_Certificate.jpeg",
    certificate: "/certificates/BFSI_Certificate.jpeg",
  },
];

const Certifications = () => {
  return (
    <section className="certifications" id="certifications">
      <div className="certifications-container">
        <h2 className="section-title">Certifications</h2>

        <p className="section-subtitle">
          Professional certifications and training that have strengthened my
          technical, cybersecurity, embedded systems, VLSI, and BFSI knowledge.
        </p>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div className="certificate-card" key={index}>
              <div className="certificate-image-container">
                {cert.image.toLowerCase().endsWith(".pdf") ? (
                  <div className="pdf-preview">
                    <div className="pdf-icon">PDF</div>
                    <p>{cert.title}</p>
                  </div>
                ) : (
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    className="certificate-image"
                  />
                )}
              </div>

              <div className="certificate-content">
                <h3>{cert.title}</h3>

                <p className="certificate-issuer">
                  Issued by: <strong>{cert.issuer}</strong>
                </p>

                <a
                  href={cert.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-certificate"
                >
                  View Certificate
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

