// app/page.js
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const projects = [
    {
      title: "Repair_or_replace-back_end",
      tech: "Python, Flask, SQLAlchemy, PostgreSQL, RESTful API",
      image: "/repair.jpg",
      github: "#",
      techColor: "text-blue-500",
      desc: "Backend system enabling homeowners and landlords to track appliance ownership and maintenance costs."
    },
    {
      title: "E-commerce Platform",
      tech: "Flask, React, SQL, AWS",
      image: "/ecommerce.jpg",
      github: "#",
      techColor: "text-green-500",
      desc: "Full-featured e-commerce platform with user registration/login, shopping cart, and order processing."
    },
    {
      title: "Library Management System",
      tech: "Python, SQL",
      image: "/library.jpg",
      github: "#",
      techColor: "text-purple-500",
      desc: "Library system supporting registration, book borrowing, and inventory updates."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 顶部导航 */}
      <header className="flex justify-between items-center max-w-6xl mx-auto px-4 py-4 border-b border-gray-300 dark:border-gray-700 sticky top-0 bg-background z-50">
        <h1 className="text-lg font-bold">James Zhang</h1>
        <nav className="space-x-6 text-sm">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#resume" className="hover:underline">Resume</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-3 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </nav>
      </header>

      {/* Hero 区域 */}
      <section id="home" className="flex flex-col md:flex-row items-center justify-between px-4 py-16 max-w-6xl mx-auto">
        {/* 左侧文字 */}
        <div className="md:w-1/2 space-y-4">
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
            Welcome to my portfolio!
          </p>
          <h2 className="text-4xl font-bold">
            Hey folks, I'm{" "}
            <span className="text-yellow-500">a Web Developer</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Software Engineer with strong experience in Python, JavaScript, SQL,
            RESTful API, and full-stack web development. I build scalable,
            user-friendly applications and enjoy solving real-world problems.
          </p>
          <div className="flex space-x-4 mt-6">
            <a
              href="/James_Zhang_Resume_Backend_2025.pdf"
              download
              className="px-4 py-2 border rounded hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              📄 Download Resume
            </a>
            <a
              href="#contact"
              className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-400"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* 右侧图片 */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <Image
            src="/profile.jpg"
            alt="James Zhang"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Skills 区域 */}
      <section className="px-4 py-16 max-w-6xl mx-auto" id="skills">
        <h2 className="text-2xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "JavaScript", icon: "🟨" },
            { name: "React", icon: "⚛️" },
            { name: "Node.js", icon: "🟩" },
            { name: "MongoDB", icon: "🍃" },
            { name: "Python/Flask", icon: "🧪" },
            { name: "HTML5", icon: "📄" },
            { name: "CSS3", icon: "🎨" },
            { name: "Git", icon: "🔗" },
          ].map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center border rounded-lg p-6 hover:shadow-lg transition"
            >
              <span className="text-4xl mb-2">{skill.icon}</span>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects 区域 */}
      <section id="projects" className="px-4 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition bg-white dark:bg-gray-800"
            >
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${project.image}`}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <p className={`mt-2 text-sm font-semibold px-4 ${project.techColor}`}>
                {project.tech}
              </p>
              <h3 className="text-lg font-bold px-4 text-gray-900 dark:text-gray-100">
                {project.title}
              </h3>
              <p className="px-4 text-gray-700 dark:text-gray-300">{project.desc}</p>
              <div className="px-4 py-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-yellow-500 hover:underline"
                >
                  <span>🐙</span> <span>Github</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact 区域 */}
      <section id="contact" className="px-4 py-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* 地图 + 联系方式 */}
          <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.937227253346!2d-122.452234!3d37.716172"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2">Say hello</h3>
              <p className="text-sm mb-1">📍 220 Lobos St, San Francisco, CA 94112</p>
              <p className="text-sm mb-4">📧 wuab@yahoo.com</p>
              <div className="flex space-x-4">
                <a href="https://github.com/your-github" className="hover:text-yellow-400">🐙 GitHub</a>
                <a href="https://linkedin.com/in/your-linkedin" className="hover:text-yellow-400">💼 LinkedIn</a>
              </div>
            </div>
          </div>

          {/* 联系表单 */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Want to know more? Let's talk</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="border rounded-md px-4 py-2 w-full" />
                <input type="email" placeholder="Email" className="border rounded-md px-4 py-2 w-full" />
              </div>
              <textarea placeholder="Message" rows="4" className="border rounded-md px-4 py-2 w-full"></textarea>
              <button type="submit" className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600">
                Send Button
              </button>
            </form>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-16">
          © 2025 James Zhang. All rights reserved
        </p>
      </section>
    </div>
  );
}
