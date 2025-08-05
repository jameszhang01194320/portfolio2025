// app/Navbar.jsx
"use client";
import React from "react";

export default function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="font-bold text-xl">James Zhang</h1>
        <div className="space-x-6">
          <button onClick={() => scrollToSection("home")} className="hover:text-yellow-500">
            Home
          </button>
          <button onClick={() => scrollToSection("resume")} className="hover:text-yellow-500">
            Resume
          </button>
          <button onClick={() => scrollToSection("projects")} className="hover:text-yellow-500">
            Projects
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-yellow-500">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
