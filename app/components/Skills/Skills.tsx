'use client'

import { motion } from "framer-motion"
import skills from "../Data/Data.json"

const MySkills = () => {
    return (
        <section id="skills" className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.h2 
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl font-extrabold mb-6"
                >
                    My Expertise
                </motion.h2>
            </div>

            <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-8">
                {skills.map((skill, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center gap-4"
                    >
                        <img src={skill.icon} alt={skill.name} className="w-20 h-20 hover:scale-110 transition-transform duration-300" />
                        <p className="text-lg font-semibold">{skill.name}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default MySkills