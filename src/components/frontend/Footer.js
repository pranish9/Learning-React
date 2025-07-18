import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#232526",
        color: "#f3f4f6",
        textAlign: "center",
        padding: "16px 0 8px 0",
        fontSize: "1rem",
        borderTopLeftRadius: "18px",
        borderTopRightRadius: "18px",
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        zIndex: 100,
        borderTop: "1px solid #374151",
      }}
    >
      <div style={{ marginBottom: "6px" }}>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#60a5fa",
            margin: "0 10px",
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          GitHub
        </a>
        <a
          href="mailto:info@example.com"
          style={{
            color: "#60a5fa",
            margin: "0 10px",
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          Contact
        </a>
      </div>
      <p style={{ margin: 0, opacity: 0.8 }}>
        &copy; {new Date().getFullYear()} <span style={{ color: "#fbbf24" }}>My Application</span>
      </p>
    </footer>
  );
};

export default Footer;