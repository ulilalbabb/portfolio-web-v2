'use client'

import { motion } from "framer-motion"

const HeroSection = () => {
    return (
        <section 
            className="h-screen flex items-center bg-white px-8"
            id="home">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    <div className="text-left">
                        <motion.h1
                            className="text-6xl font-extrabold text-black leading-tight"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Hello, I’m <span className="underline decoration-gray-400">Ulil</span>
                        </motion.h1>
                        <motion.p
                            className="mt-4 text-xl text-gray-600"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            A <span className="font-semibold text-black">Frontend Developer </span> 
                            who loves building clean and modern web experiences with 
                            <span className="font-semibold"> React & Next.js</span>.
                        </motion.p>
                        <motion.div
                            className="mt-8 flex gap-6"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                        >
                            <a
                            href="#projects"
                            className="px-6 py-3 bg-black text-white rounded-full shadow-md hover:bg-gray-800 transition"
                            >
                            View Projects
                            </a>
                            <a
                            href="#contact"
                            className="px-6 py-3 border border-black rounded-full hover:bg-gray-100 transition"
                            >
                            Contact Me
                            </a>
                        </motion.div>
                    </div>
                    <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    >
                    <img
                        src="/ulil-2.jpg"
                        alt="Profile"
                        className="rounded-2xl shadow-lg grayscale hover:grayscale-0 transition duration-700 w-100 h-100"
                    />
                    </motion.div>
                </div>
        </section>
    )
}

export default HeroSection