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

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 顶部导航 */}
      {/* 顶部导航 */}
      <header className="sticky top-0 bg-background border-b border-gray-300 dark:border-gray-700 z-50">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center py-4">
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
        </div>
      </header>


      {/* Hero 区域 */}
      <section id="home" className="flex flex-col md:flex-row items-center justify-between px-16 py-16 max-w-6xl mx-auto">
        {/* 左侧文字 */}
        <div className="md:w-1/2 space-y-4">
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
            Welcome to my portfolio!
          </p>
          <h2 className="text-4xl font-bold">
            Hey folks, I&apos;m{" "}
            <span className="text-yellow-500">a Web Developer</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Software Engineer with strong experience in Python, JavaScript, SQL, 
            RESTful API, and full-stack web development. I build scalable, user-friendly 
            applications and enjoy solving real-world problems.
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
        <div className="md:w-1/2 mt-10 md:mt-0">
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
      <section className="px-16 py-16 max-w-6xl mx-auto" id="skills">
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

{/* Experience 区域（时间轴） */}
<section id="resume" className="px-16 py-16 bg-gray-50 dark:bg-gray-900">
  <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-gray-100">
    Experience
  </h2>
  <div className="relative border-l border-gray-300 dark:border-gray-700 ml-4">
    {/* 工作经历 1 */}
    <div className="mb-10 ml-6">
      <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-yellow-500 rounded-full ring-8 ring-gray-50 dark:ring-gray-900">📍</span>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">
        Software Engineer Trainee
        <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
          Coding Temple | 05/2024 – Present
        </span>
      </h3>
      <p className="text-gray-700 dark:text-gray-300">
        Developed RESTful APIs with Flask, PostgreSQL, React integration, deployed with Docker/AWS.
        Improved backend response time by 25%, collaborated in Agile sprints.
      </p>
    </div>

    {/* 工作经历 2 */}
    <div className="mb-10 ml-6">
      <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-yellow-500 rounded-full ring-8 ring-gray-50 dark:ring-gray-900">📍</span>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">
        Administrative Assistant
        <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
          John H Wu Medical Office | 01/2021 – 12/2022
        </span>
      </h3>
      <p className="text-gray-700 dark:text-gray-300">
        Implemented a document management system, improved workflow efficiency by 20%.
      </p>
    </div>

    {/* 工作经历 3 */}
    <div className="mb-10 ml-6">
      <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-yellow-500 rounded-full ring-8 ring-gray-50 dark:ring-gray-900">📍</span>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">
        E-Commerce Business Owner
        <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
          Self-Employed | 06/2014 – 09/2020
        </span>
      </h3>
      <p className="text-gray-700 dark:text-gray-300">
        Built and managed an online platform for educational material sales, achieving $400,000+ revenue.
      </p>
    </div>
  </div>
</section>

{/* Projects 区域 */}
<section id="projects" className="px-16 py-16 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-gray-100">
    My Projects
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        title: "Repair_or_replace-back_end",
        tech: "Python, Flask, SQLAlchemy, PostgreSQL, RESTful API",
        description:
          "Backend system enabling homeowners and landlords to track appliance ownership and maintenance costs.",
        image: "/repair_project.jpg",
        github: "#",
        techColor: "text-blue-500",
      },
      {
        title: "E-commerce Platform",
        tech: "Flask, React, SQL, AWS",
        description:
          "Full-featured e-commerce platform with user registration/login, shopping cart, and order processing.",
        image: "/ecommerce_project.jpg",
        github: "#",
        techColor: "text-green-500",
      },
      {
        title: "Library Management System",
        tech: "Python, SQL",
        description:
          "Library system supporting registration, book borrowing, and inventory updates.",
        image: "/library_project.jpg",
        github: "#",
        techColor: "text-purple-500",
      },
    ].map((project, idx) => (
<div
  key={idx}
  className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition bg-white dark:bg-gray-800"
>
  {/* 项目图片 */}
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-48 object-cover"
  />
  {/* 技术标签 */}
  <p
    className={`mt-2 text-sm font-semibold px-4 ${project.techColor} dark:${project.techColor}`}
  >
    {project.tech}
  </p>
  {/* 标题 */}
  <h3 className="text-lg font-bold px-4 text-gray-800 dark:text-gray-100">
    {project.title}
  </h3>
  {/* 描述 */}
  <p className="px-4 text-gray-700 dark:text-gray-300">
    {project.description}
  </p>
  {/* GitHub 链接 */}
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
<section id="contact" className="px-16 py-16 max-w-6xl mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
    {/* 地图 + 联系方式 */}
    <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg">
      {/* Google Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.937227253346!2d-122.452234!3d37.716172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7d54d0b0bdbd%3A0xa5f3e8911c43aa71!2s220%20Lobos%20St%2C%20San%20Francisco%2C%20CA%2094112!5e0!3m2!1sen!2sus!4v1700000000000"
        width="100%"
        height="250"
        allowFullScreen=""
        loading="lazy"
      ></iframe>

      {/* 联系方式 */}
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2">Say hello</h3>
        <p className="text-sm mb-1">📍 220 Lobos St, San Francisco, CA 94112</p>
        <p className="text-sm mb-4">📧 wuab@yahoo.com</p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
          >
            🐙 GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
          >
            💼 LinkedIn
          </a>
        </div>
      </div>
    </div>

    {/* 联系表单 */}
    <div>
      <h3 className="text-2xl font-bold mb-6">Want to know more? Let&apos;s talk
</h3>
      <form className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border rounded-md px-4 py-2 w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded-md px-4 py-2 w-full"
          />
        </div>
        <textarea
          placeholder="Message"
          rows="4"
          className="border rounded-md px-4 py-2 w-full"
        ></textarea>
        <button
          type="submit"
          className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600"
        >
          Send Button
        </button>
      </form>
    </div>
  </div>

  {/* Copyright */}
  <p className="text-center text-sm text-gray-500 mt-16">
    © 2025 James Zhang. All rights reserved
  </p>
</section>

    </div>
  );
}
