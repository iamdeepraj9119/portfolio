{/* ================= SKILLS ================= */}
<section id="skills">
  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8">
    Skills
  </h2>

  {/* ✅ UPDATED GRID */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

    {[
      {
        title: "Data Analysis",
        desc: "Python, Pandas, NumPy, SQL",
        icon: "📊",
      },
      {
        title: "Data Visualization",
        desc: "Power BI, Interactive Dashboards",
        icon: "📈",
      },
      {
        title: "Digital Marketing",
        desc: "SEO, Google Analytics",
        icon: "📢",
      },
      {
        title: "Social Media Marketing",
        desc: "Content Strategy, Growth",
        icon: "📱",
      },
      {
        title: "Development",
        desc: "Django, Backend APIs",
        icon: "💻",
      },
      {
        title: "Soft Skills",
        desc: "Problem Solving, Analytical Thinking",
        icon: "🧠",
      },
    ].map((skill, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative group"
      >

        {/* 🔥 GLOW EFFECT */}
        <div className="absolute -inset-1 bg-gradient-to-r 
        from-blue-500 via-purple-500 to-pink-500 
        rounded-2xl blur opacity-20 group-hover:opacity-60 transition"></div>

        <div className="relative bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xl h-full">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            {skill.icon} {skill.title}
          </h3>
          <p className="text-gray-400 text-sm sm:text-base">
            {skill.desc}
          </p>
        </div>

      </motion.div>
    ))}

  </div>
</section>