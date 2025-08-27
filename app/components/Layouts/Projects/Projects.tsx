'use client'

import { motion } from "framer-motion"
import ProjectCard from "../../Fragments/ProjectCard"

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

            <ProjectCard />
          </div>
        </section>
    )
}

export default Projects