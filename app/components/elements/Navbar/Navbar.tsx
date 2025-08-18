'use client'

import Button from "../Button/Button";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    const navItems = [
        { label: 'Home', href: '#' },
        { label: 'About', href: '#about' },
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Contact', href: '#contact' },
    ]

    const scrollToSection = (href: string) => {
        if (href === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const section = document.getElementById(href.slice(1));
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
    return (
        <motion.nav className="w-full fixed top-0 left-0 z-10">
            <div className="mx-auto px-6">
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
                    <div className="flex items-center space-x-10">
                        {navItems.map((item) => (
                            <motion.div 
                                key={item.label}
                                className="cursor-pointer"
                                onClick={() => scrollToSection(item.href)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ delay: 0.1 }}
                                animate={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: -20 }}
                                >
                                {item.label}
                                {pathname === item.href && (
                                    <motion.div 
                                        className="w-full h-1 bg-black"
                                        layoutId="activeTab"
                                        initial={false}
                                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                                    />
                                )}
                            </motion.div>
                        ))}

                        <Button 
                            variant='bg-black text-white px-4 py-2'
                            onClick={() => scrollToSection('#contact')}>
                            Hire Me
                        </Button>
                    </div>
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar