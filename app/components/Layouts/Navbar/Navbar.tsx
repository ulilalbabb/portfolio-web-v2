'use client'

import Button from "../../Elements/Button/Button";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [active, setActive] = useState('home');

    const navItems = [
        { label: 'Home', id: 'home' },
        { label: 'About', id: 'about' },
        { label: 'Skills', id: 'skills' },
        { label: 'Projects', id: 'projects' },
        { label: 'Contact', id: 'contact' },
    ]

    // Function to scroll to a specific section
    const scrollToSection = (id: string) => {
        if (id === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log("Active: ", entry.target.id)
                    setActive(entry.target.id);
                }
            })
        }, {
            threshold: 0.2
        })

        navItems.forEach((item) => {
            const section = document.getElementById(item.id);
            console.log("Section: ", item.id, section)
            if (section) observer.observe(section);
            
        })

        return () => observer.disconnect();
    }, [])
    return (
        <motion.nav className="w-full fixed top-0 left-0 z-10">
            <div className="px-4 lg:px-15">
                <div className="flex justify-between items-center h-16">
                    <motion.div 
                        className="font-bold text-2xl cursor-pointer"
                        onClick={() => scrollToSection('#')}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        >
                        <span>
                            Ulil
                        </span>
                    </motion.div>
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-10">
                        {navItems.map((item) => (
                            <motion.div 
                                key={item.label}
                                className={`cursor-pointer relative after:block after:h-[2px] after:w-0 after:bg-yellow-600 after:transition-all after:duration-300 hover:after:w-full ${active === item.id ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}
                                onClick={() => scrollToSection(item.id)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ delay: 0.1 }}
                                
                                >
                                {item.label}
                            </motion.div>
                        ))}

                        <Button 
                            variant='bg-yellow-600 px-4 py-2 rounded-lg hover:shadow-lg hover:bg-yellow-700'
                            onClick={() => scrollToSection('#contact')}>
                            Hire Me
                        </Button>
                    </div>
                    <Button
                        variant="md:hidden absolute top-6 right-4 text-black"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <Menu />
                    </Button>

                    {/* Mobile Menu */}
                        {isMobileMenuOpen && (
                            <motion.div 
                                className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-8"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                >
                                <Button 
                                    variant='md:hidden absolute top-6 right-4 text-black'
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                    {isMobileMenuOpen ? <X /> : <Menu />}
                                </Button>
                                {navItems.map((item) => (
                                    <motion.div 
                                        key={item.label}
                                        className="cursor-pointer"
                                        onClick={() => {
                                            scrollToSection(item.id);
                                            setIsMobileMenuOpen(false);
                                        }}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ delay: 0.1 }}
                                        >
                                        {item.label}
                                    </motion.div>
                                ))}
                                <Button 
                                    variant='bg-yellow-600 text-white px-4 py-2 hover:shadow-lg hover:translate-y-[-3px] transition-transform duration-300 ease-in-out'
                                    onClick={() => {
                                        scrollToSection('#contact');
                                        setIsMobileMenuOpen(false);
                                    }}>
                                    Hire Me
                                </Button>
                            </motion.div>
                        )}
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar