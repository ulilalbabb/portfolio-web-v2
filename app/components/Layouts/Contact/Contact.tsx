'use client'

import Button from "../../elements/Button/Button"
import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Github } from 'lucide-react';
import { Send } from 'lucide-react';


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
          <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-20 h-1 bg-black mx-auto mb-6 rounded-full"
        />
          <p className="text-gray-600 text-center text-xl mb-8 px-5">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
          </p>
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
                variant="bg-yellow-600 flex gap-2 items-center justify-center w-full text-white px-6 py-2 rounded-full hover:bg-yellow-700 transition duration-300 ease-in-out">
                    <Send></Send> Send Message
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
            <div
              className="bg-gray-50 p-4 rounded-lg shadow-md border hover:shadow-xl transition duration-300 ease-in-out"
            >
              <p className="font-medium">📧 Email</p>
              <p className="text-gray-600">ulilalbabcmpk@gmail.com</p>
            </div>
            <div
              className="bg-gray-50 p-4 rounded-lg shadow-md border hover:shadow-xl transition duration-300 ease-in-out"
            >
              <p className="font-medium">📞 Phone</p>
              <p className="text-gray-600">+62 853-3461-7470</p>
            </div>
            <div
              className="bg-gray-50 p-4 rounded-lg shadow-md border hover:shadow-xl transition duration-300 ease-in-out"
            >
              <p className="font-medium flex gap-2"><Instagram></Instagram> Instagram</p>
              <Link 
                href="https://www.instagram.com/uliiilalbab/"
                className="text-gray-600 hover:underline">uliiilalbab</Link>
            </div>
            <div
              className="bg-gray-50 p-4 rounded-lg shadow-md border hover:shadow-xl transition duration-300 ease-in-out"
            >
              <p className="font-medium flex gap-2"><Github /> Github</p>
              <Link 
                href="https://github.com/ulilalbabb"
                className="text-gray-600 hover:underline">ulilalbabb</Link>
            </div>
            <div
              className="bg-gray-50 p-4 rounded-lg shadow-md border hover:shadow-xl transition duration-300 ease-in-out"
            >
              <p className="font-medium">📍 Location</p>
              <p className="text-gray-600">Malang, ID</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
    )
}

export default ContactPage