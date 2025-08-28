import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function Navbar() {
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/login");
    };

    return (
        <header>
            <nav className="nav-container">
                <div className="logo">Claire Ko</div>
                <div><div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/story">Story</Link>
                    <Link to="/contact">Contact</Link>
                    {currentUser && <Link to="/message">Message Me</Link>}
                    {!currentUser && <Link to="/login">Login</Link>}
                </div>
                    {currentUser && (
                        <div className="user-info" style={{ fontSize: "larger", display: "flex", alignItems: "center", gap: "10px" }}>
                            <span>Hello, {currentUser.email}</span>
                            <button className="btn btn-link" onClick={handleLogout}>Logout</button>
                        </div>
                    )}</div>
            </nav>
        </header>
    );
}

