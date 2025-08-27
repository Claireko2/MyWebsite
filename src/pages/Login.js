import React, { useRef, useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import "../Login.css"; // We'll put styles here

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { currentUser } = useAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();
        setError("");
        try {
            await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
            navigate("/");
        } catch {
            setError("Failed to log in");
        }
    }

    async function handleSignup(e) {
        e.preventDefault();
        setError("");
        try {
            await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
            navigate("/");
        } catch {
            setError("Failed to sign up");
        }
    }

    async function handleLogout() {
        await signOut(auth);
        navigate("/login");
    }

    if (currentUser) {
        return (
            <div className="container">
                <div id="login" className="page active">
                    <h2 className="section-title">Welcome Back</h2>
                    <p>You are logged in as <strong>{currentUser.email}</strong></p>
                    <button className="btn btn-primary" onClick={handleLogout}>Log Out</button>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div id="login" className="page active">
                <h2 className="section-title">Login or Sign Up</h2>
                <h3 className="subtitle">Login to send me a message!</h3>
                {error && <p className="error">{error}</p>}

                <div className="login-form">
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email" ref={emailRef} required />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" placeholder="Enter your password" ref={passwordRef} required />
                        </div>
                        <button type="submit" className="btn btn-info">Log In</button>
                    </form>

                    <div className="signup-section">
                        <p>New here?</p>
                        <button className="btn btn-secondary" onClick={handleSignup}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
