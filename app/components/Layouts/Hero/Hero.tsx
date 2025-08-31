'use client'

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Button from "../../elements/Button/Button"

const HeroSection = () => {

    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <main 
            className="min-h-screen flex items-center bg-white px-6 pt-16"
            id="home">
                <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
                    <div>
                        <motion.h1
                            className="text-6xl font-extrabold text-black leading-tight"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Hello, I’m <span className="underline decoration-yellow-600">Ulil</span>
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
                            <Button
                                variant="px-5 py-3 inline-flex bg-yellow-600 text-white text-xs md:text-sm items-center rounded-full hover:shadow-lg group hover:-translate-y-1 transition-transform duration-300 ease-in-out"
                                onClick={() => handleScroll("projects")}
                            >
                                View Projects 
                                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                            </Button>
                            <Button
                                variant="px-5 py-3 border border-yellow-600 text-yellow-600 rounded-full hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 ease-in-out"
                                onClick={() => handleScroll("contact")}
                            >
                                Contact Me
                            </Button>
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
                        className="rounded-2xl shadow-lg grayscale hover:grayscale-0 transition duration-700 w-100 h-100 md:w-100 md:h-100"
                    />
                    </motion.div>
                </div>
        </main>
    )
}

export default HeroSection