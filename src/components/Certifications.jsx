
import React from "react";
import "./Certifications.css";

const certifications = [
  {
    title: "BFSI Accelerated Program",
    issuer: "BFSI Sector Skill Development Program",
    type: "pdf",
    file: "/certificates/BFSI_%20Accelerated%20Program%20.pdf",
  },
  {
    title: "Cisco Network Support and Security",
    issuer: "Cisco",
    type: "pdf",
    file: "/certificates/Cisco_Network%20Support%20and%20Security.pdf",
  },
  {
    title: "Emertxe Embedded Systems",
    issuer: "Emertxe",
    type: "image",
    file: "/certificates/Emertxe_Embedded%20Systems.jpeg",
  },
  {
    title: "IBM Cybersecurity Fundamentals",
    issuer: "IBM",
    type: "image",
    file: "/certificates/IBM_cybersecurity%20Fundamentals.jpeg",
  },
  {
    title: "VLSI SoC Design using Verilog-HDL",
    issuer: "Maven Silicon",
    type: "image",
    file:
      "/certificates/Maven%20Silicon_VLSI%20Soc%20Design%20Verilog-HDL.jpeg",
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

              {/* Certificate Preview */}
              <div className="certificate-image-container">

                {cert.type === "image" ? (
                  <img
                    src={cert.file}
                    alt={`${cert.title} certificate`}
                    className="certificate-image"
                  />
                ) : (
                  <div className="pdf-preview">
                    <div className="pdf-icon">PDF</div>

                    <p>{cert.title}</p>
                  </div>
                )}

              </div>

              {/* Certificate Details */}
              <div className="certificate-content">

                <h3>{cert.title}</h3>

                <p className="certificate-issuer">
                  Issued by: <strong>{cert.issuer}</strong>
                </p>

                {/* View Certificate */}
                <a
                  href={cert.file}
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


