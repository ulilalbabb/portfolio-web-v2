import { motion } from "framer-motion"
import projects from "../Data/Projects.json"
import Image from "next/image"

const ProjectCard = () => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  whileHover={{ transition: { duration: 0.3 }, translateY: -10 }}
                  className="border border-yellow-600 rounded-2xl shadow-lg overflow-hidden"
                >
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={500}
                    height={500}
                    className="w-full h-48 object-cover" 
                  />
                  <div className="p-4">
                    <div>
                      <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                    </div>
                    
                    <div>
                      <div className="flex gap-2 mb-4">
                        {project.stack.map((logo, index) => (
                          <Image
                            key={index}
                            src={logo}
                            alt={`Logo ${index}`}
                            width={30}
                            height={30}
                          />
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          className="px-3 py-2 rounded-lg border border-yellow-600 hover:bg-yellow-600 hover:text-white transition"
                          >
                            View Code
                        </a>
                        <a
                          href={project.link}
                          target="_blank"
                          className="px-3 py-2 rounded-lg border border-yellow-600 hover:bg-yellow-600 hover:text-white hover:opacity-90 transition"
                          >
                            Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                    {/* Tech stack logos  */}
                </motion.div>
              ))}
            </div>
    )
}

export default ProjectCard