// src/components/Layout.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Navbar />
            <main style={{ flex: 1, margin: 0, padding: 0 }}>{children}</main>
            <Footer />
        </div>
    );
}