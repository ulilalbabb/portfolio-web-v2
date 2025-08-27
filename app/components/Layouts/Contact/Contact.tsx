'use client'

import { motion } from "framer-motion"
import Button from "../../Elements/Button/Button"

const ContactPage = () => {
    return (
        <section id="contact" className="bg-white text-gray-900 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            
            >
            <h1 className="text-3xl font-bold mb-6 text-center">
                Let's{" "}
            <span className="bg-gradient-to-r from-yellow-600 to-gray-600 bg-clip-text text-transparent">
              Connect
            </span>
            </h1>    
          {/* <p className="text-gray-600 text-center text-xl px-25">
            I'm always excited to work on new projects and collaborate with amazing people. 
            Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from you.
          </p> */}
          </motion.div>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-gray-50 p-8 rounded-2xl shadow-lg border"
        >
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
            />
            <textarea
              placeholder="Message"
              rows= {4}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
            ></textarea>
            <Button
                variant="bg-yellow-600 w-full text-white px-6 py-2 rounded-full hover:bg-yellow-700 transition duration-300 ease-in-out">
                    Send Message
                </Button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="bg-gray-50 p-4 rounded-lg shadow-md border"
            >
              <p className="font-medium">📧 Email</p>
              <p className="text-gray-600">ulilalbabcmpk@gmail.com</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="bg-gray-50 p-4 rounded-lg shadow-md border"
            >
              <p className="font-medium">📞 Phone</p>
              <p className="text-gray-600">+62 853-3461-7470</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="bg-gray-50 p-4 rounded-lg shadow-md border"
            >
              <p className="font-medium">📍 Location</p>
              <p className="text-gray-600">Malang, ID</p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
    )
}

export default ContactPage