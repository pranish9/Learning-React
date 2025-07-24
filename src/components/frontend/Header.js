import { NavLink } from "react-router";
import React from "react";

const Header = () => {
  return (
    <header
      style={{
        background: "#111",
        padding: "18px 36px",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1.5px solid #222",
        boxShadow: "0 2px 16px rgba(0,0,0,0.10)",
        borderBottomLeftRadius: "18px",
        borderBottomRightRadius: "18px",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div style={{
        fontWeight: "bold",
        fontSize: "1.5rem",
        color: "#fff",
        letterSpacing: "1px",
        display: "flex",
        alignItems: "center",
        gap: "10px"
      }}>
        My Application
      </div>
      <nav style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <NavLink
          to="/home"
          style={({ isActive }) => ({
            color: isActive ? "#fbbf24" : "#2563eb",
            marginRight: "24px",
            textDecoration: "none",
            fontWeight: isActive ? "bold" : "500",
            fontSize: "1.1rem",
            padding: "7px 18px",
            borderRadius: "8px",
            background: isActive ? "rgba(251,191,36,0.12)" : "transparent",
            transition: "all 0.2s",
            boxShadow: isActive ? "0 2px 8px rgba(251,191,36,0.08)" : "none"
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/contact-us"
          style={({ isActive }) => ({
            color: isActive ? "#fbbf24" : "#2563eb",
            textDecoration: "none",
            fontWeight: isActive ? "bold" : "500",
            fontSize: "1.1rem",
            padding: "7px 18px",
            borderRadius: "8px",
            background: isActive ? "rgba(251,191,36,0.12)" : "transparent",
            transition: "all 0.2s",
            boxShadow: isActive ? "0 2px 8px rgba(251,191,36,0.08)" : "none"
          })}
        >
          Contact Us
        </NavLink>
        <NavLink
          to="/admin/login"
          style={{
            background: "#2563eb",
            color: "#fff",
            borderRadius: "8px",
            padding: "7px 18px",
            textDecoration: "none",
            fontWeight: "bold",
            marginLeft: "16px",
            transition: "background 0.2s"
          }}
        >
          Login
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;