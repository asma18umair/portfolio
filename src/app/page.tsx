
// src/app/page.tsx
import React from 'react';

export default function Portfolio() {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      {/* Header Section */}
      <header className="bg-gray-600 text-white py-12 px-8 flex items-center justify-between">
        <div>
          <h2 className="text-5xl font-bold animate-bounce">
            Hello there, This is me...<br />
            <h1 className="inline"><i>ASMA</i></h1>
          </h2>
          <p className="text-4xl mt-2">I am a Web Developer</p>
        </div>
        {/* Right Side Image */}
        <div className="w-40 h-40 overflow-hidden"> {/* Made the image larger with w-40 and h-40 */}
          <img src="/image/asma umair.png" alt="Your Name" className="w-24 h-26" />
        </div>
      </header>

      {/* Rest of the sections */}
      <div className="h-64 bg-cover bg-center">
        <section className="p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Web Developer</h2>
          <p className="text-lg max-w-2xl mx-auto bg-gray-400 rounded h-40 bg-gradient-to-r from-purple-500 to-pink-500">
            My proficiency in HTML and CSS allows me to design visually appealing and responsive websites that adapt seamlessly to various devices and screen sizes. I take pride in my attention to detail and strive to create polished designs that not only look great but also prioritize accessibility and user experience.
          </p>
          <a href="https://github.com/asma18umair" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-2 rounded mt-4 inline-block">
            <b>Click Here to Check my Github Profile</b>
          </a>
        </section>
      </div>

      {/* Skills Section */}
      <div className="flex h-screen bg-gray-100">
        {/* Left Sidebar - Skills Section */}
        <div className="w-1/4 bg-white p-6 shadow-md">
          <h2 className="text-xl font-bold mb-4">My Skills</h2>

          {/* HTML Skill */}
          <div className="mb-4">
            <p className="text-gray-700">HTML</p>
            <div className="w-full bg-gray-300 rounded-full h-2.5 mt-2">
              <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
            </div>
            <p className="text-sm text-gray-500">90%</p>
          </div>

          {/* CSS Skill */}
          <div className="mb-4">
            <p className="text-gray-700">CSS</p>
            <div className="w-full bg-gray-300 rounded-full h-2.5 mt-2">
              <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
            </div>
            <p className="text-sm text-gray-500">90%</p>
          </div>

          {/* JavaScript Skill */}
          <div className="mb-4">
            <p className="text-gray-700">JavaScript</p>
            <div className="w-full bg-gray-300 rounded-full h-2.5 mt-2">
              <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <p className="text-sm text-gray-500">60%</p>
          </div>     <div className="mb-4">
            <p className="text-gray-700">Type Script</p>
            <div className="w-full bg-gray-300 rounded-full h-2.5 mt-2">
              <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '50%' }}></div>
            </div>
            <p className="text-sm text-gray-500">60%</p>
          </div>

          {/* Figma Skill */}
          <div className="mb-4">
            <p className="text-gray-700">Figma</p>
            <div className="w-full bg-gray-300 rounded-full h-2.5 mt-2">
              <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
            </div>
            <p className="text-sm text-gray-500">80%</p>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="w-3/4 p-6">
          {/* Removed "Welcome to My Portfolio" */}
        </div>
      </div>
    </div>
  );
}
