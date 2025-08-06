// app/Navbar.jsx
"use client";
import React from "react";

export default function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      {/* 宽度限制与内容区一致 */}
      <div className="max-w-screen-xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo / 名字 */}
        <h1 className="font-bold text-xl text-gray-900 dark:text-white">
          James Zhang
        </h1>

        {/* 菜单按钮 */}
        <div className="space-x-6 text-gray-800 dark:text-gray-200">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-yellow-500 transition"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("resume")}
            className="hover:text-yellow-500 transition"
          >
            Resume
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-yellow-500 transition"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-yellow-500 transition"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
