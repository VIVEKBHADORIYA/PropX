import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Welcome() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "20px",
        textAlign: "center",
      }}
    >
      
      <div style={{ marginBottom: "auto" }}>
        <img
          src={logo}
          alt="PopX Logo"
          style={{ width: "180px", marginBottom: "20px" }}
        />
      </div>

      <div style={{ width: "100%" }}>
        <h1 className="h1">Welcome to PopX</h1>
        <p className="p"></p>
        <Link
          to="/signup"
          className="btn btn-primary"
          style={{
            textDecoration: "none",
            textAlign: "center",
            display: "block",
            margin: "10px 0",
          }}
        >
          Create Account
        </Link>
        <Link
          to="/login"
          className="btn btn-secondary"
          style={{
            textDecoration: "none",
            textAlign: "center",
            display: "block",
            margin: "10px 0",
          }}
        >
          Already Registered? Login
        </Link>
      </div>
    </div>
  );
}
