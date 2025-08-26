'use client'

import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-24 bg-white text-black">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Divider */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-20 h-1 bg-black mx-auto mb-6 rounded-full"
        />

        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-6 text-yellow-600"
        >
          About Me
        </motion.h2>

        {/* Teks Pengenalan */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed text-gray-700 mb-12"
        >
            I'm an English literature student who is very curious about web development. I'm the type of person who likes to explore and try new things if it's interesting to me. Over the past year I've been sharpening my knowledge and skills in React.js and Next.js.
            I enjoy solving problems and learning about new technologies, as well as providing creative ideas through design and code.
        </motion.p>
      </div>
    </section>
    )
}

export default About