'use client'

import projects from "../Data/Projects.json"
import skills from "../Data/Icon.json" 
import { motion } from "framer-motion"
import Image from "next/image"

const Projects = () => {
    return (
        <section id="projects" className="py-16 bg-white text-black">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-10 text-yellow-600"
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="border rounded-2xl shadow-lg overflow-hidden"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Tech stack logos */}
                {/* <div className="flex gap-3 mb-4">
                  {skills.map((logo) => (
                    <a 
                      href={logo.link}
                      target="_blank"
                      alt="tech logo" 
                       
                      className="opacity-80 hover:opacity-100 transition"
                    >
                      <Image src={logo.icon} alt={logo.name} width={28} height={28} />
                    </a>
                  ))}
                </div> */}

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    className="px-3 py-2 rounded-lg border border-black hover:bg-black hover:text-white transition"
                  >
                    View Code
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    className="px-3 py-2 rounded-lg bg-[var(--color-accent)] text-white hover:opacity-90 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    )
}

export default Projects