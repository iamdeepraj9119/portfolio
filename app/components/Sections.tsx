import React from 'react';

export default function Sections() {
  return (
    <div className="px-6 md:px-20 py-20 space-y-32 text-white bg-black">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Deepraj Srivastav
        </h1>

        <p className="text-blue-400 text-lg mb-2">
          Data Analyst | Digital Marketing
        </p>

        <p className="text-gray-400 mb-6">
          Python • SQL • Excel • Power BI <br />
          SEO • Google Analytics • Social Media Marketing
        </p>

        <div className="flex gap-4">
          <button className="px-6 py-2 bg-white text-black rounded-lg">
            View Projects
          </button>

          <button className="px-6 py-2 bg-blue-500 rounded-lg">
            Contact Me
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section>
        <h2 className="text-4xl font-bold mb-4">About</h2>
        <p className="text-gray-400 max-w-2xl">
          I am an aspiring Data Analyst skilled in Python, SQL, Excel, and Power BI.
          I also have knowledge of Digital Marketing including SEO and Analytics.
        </p>
      </section>

      {/* SKILLS */}
      <section>
        <h2 className="text-4xl font-bold mb-6">Skills</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["Python", "SQL", "Power BI"].map((skill) => (
            <div key={skill} className="p-6 bg-white/10 rounded-xl">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section>
        <h2 className="text-4xl font-bold mb-6">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white/10 rounded-xl">
            HR Data Analytics
          </div>

          <div className="p-6 bg-white/10 rounded-xl">
            E-Commerce Dashboard
          </div>

          <div className="p-6 bg-white/10 rounded-xl">
            CodeSweep
          </div>
        </div>
      </section>

    </div>
  );
}