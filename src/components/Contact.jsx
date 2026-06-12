import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_313xx4o", // Your Service ID
        "template_ygcxaxq", // Your Template ID
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "82xBEFS5ynK4hFE3P" // Your Public Key
      )
      .then(() => {
        alert("Message sent successfully!");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message.");
      });
  };

  return (
    <section
      id="contact"
      style={{
        background: "#081225",
        padding: "80px 40px 110px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            color: "#22d3ee",
            fontWeight: 800,
            letterSpacing: "1.4px",
          }}
        >
          LET&apos;S CONNECT
        </div>

        <h2
          style={{
            margin: "10px 0 40px",
            fontSize: "clamp(42px, 5vw, 68px)",
            lineHeight: 1,
            fontWeight: 800,
            color: "white",
          }}
        >
          Contact<span style={{ color: "#22d3ee" }}>.</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.95fr 1.05fr",
            gap: "30px",
            alignItems: "stretch",
          }}
        >
          {/* LEFT SIDE */}

          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(17, 28, 53, 0.95), rgba(14, 21, 41, 0.95))",
              border: "1px solid rgba(34, 211, 238, 0.18)",
              boxShadow: "0 18px 40px rgba(239, 234, 234, 0.22)",
              borderRadius: "24px",
              padding: "32px",
              color: "white",
            }}
          >
            <h3
              style={{
                marginTop: 0,
                fontSize: "28px",
                marginBottom: "20px",
              }}
            >
              Ready to work together?
            </h3>

            <p
              style={{
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.8,
                marginBottom: "30px",
              }}
            >
              I am open to internships, project collaborations and
              entry-level roles in software and ECE-related domains.
            </p>

            <div style={{ display: "grid", gap: "18px" }}>
              <div>
                <span
                  style={{ color: "#22d3ee", fontWeight: 800 }}
                >
                  Email:
                </span>{" "}
                kumarimaddili693@gmail.com
              </div>

              <div>
                <span
                  style={{ color: "#22d3ee", fontWeight: 800 }}
                >
                  Phone:
                </span>{" "}
                +91 7075062569
              </div>

              <div>
                <span
                  style={{ color: "#22d3ee", fontWeight: 800 }}
                >
                  LinkedIn:
                </span>{" "}
                linkedin.com/in/maddili-kumari693
              </div>

              <div>
                <span
                  style={{ color: "#22d3ee", fontWeight: 800 }}
                >
                  GitHub:
                </span>{" "}
                github.com/22wh5a0409
              </div>

              <div>
                <span
                  style={{ color: "#22d3ee", fontWeight: 800 }}
                >
                  Location:
                </span>{" "}
                Hyderabad
              </div>
            </div>

            <a
              href="/resume.pdf"
              download
              style={{
                marginTop: "28px",
                display: "inline-block",
                background: "#22d3ee",
                color: "#081225",
                textDecoration: "none",
                padding: "15px 28px",
                borderRadius: "14px",
                fontWeight: 800,
              }}
            >
              Download Resume
            </a>
          </div>

          {/* RIGHT SIDE FORM */}

          <form
            onSubmit={sendEmail}
            style={{
              background:
                "linear-gradient(180deg, rgba(17, 28, 53, 0.95), rgba(14, 21, 41, 0.95))",
              border: "1px solid rgba(34, 211, 238, 0.18)",
              boxShadow: "0 18px 40px rgba(241, 230, 230, 0.18)",
              borderRadius: "24px",
              padding: "32px",
            }}
          >
            <h3
              style={{
                marginTop: 0,
                fontSize: "28px",
                marginBottom: "20px",
                color: "white",
              }}
            >
              Send a quick message
            </h3>

            <div style={{ display: "grid", gap: "16px" }}>
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
                style={inputStyle}
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
                style={inputStyle}
              />

              <textarea
                placeholder="Your Message"
                required
                rows="6"
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  minHeight: "170px",
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                marginTop: "20px",
                background: "#22d3ee",
                color: "#081225",
                border: "none",
                padding: "15px 28px",
                borderRadius: "14px",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(34, 211, 238, 0.16)",
  color: "white",
  borderRadius: "14px",
  padding: "14px 16px",
  outline: "none",
  fontSize: "16px",
  boxSizing: "border-box",
};

export default Contact;