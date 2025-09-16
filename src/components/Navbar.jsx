import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navLinks = [
        { name: "About", id: "about" },
        { name: "Mission", id: "mission" },
        { name: "Impact", id: "impact" },
        { name: "Programs", id: "programs" },
        { name: "Stories", id: "stories" },
        { name: "Get Involved", id: "getinvolved" },
        { name: "Contact", id: "contact" }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-50% 0px -50% 0px',
                threshold: 0,
            }
        );

        navLinks.forEach(link => {
            const section = document.getElementById(link.id);
            if (section) {
                observer.observe(section);
            }
        });

        const heroSection = document.getElementById('home');
        if (heroSection) {
            observer.observe(heroSection);
        }

        return () => observer.disconnect();
    }, [navLinks]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
        }
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-deep-blue/90 shadow-2xl backdrop-blur-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-extrabold tracking-widest">
                    <button onClick={() => scrollToSection('home')} className="flex items-center space-x-2 focus:outline-none">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" viewBox="0 0 20 20" fill="currentColor">
                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 5a1 1 0 112 0v2.252A4.004 4.004 0 0115 11.252V12a1 1 0 11-2 0v-.748a2.002 2.002 0 00-4 0V12a1 1 0 11-2 0v-.748A4.004 4.004 0 019 7.252V5z" clipRule="evenodd" />
                        </svg> */}
                        <img src="/logo.jpg" alt="Family Anchor" className='w-8 h-8' />
                        <span className="text-cream-white font-extrabold">Family Anchor</span>
                    </button>
                </div>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className={`
                                text-cream-white hover:text-gold transition-colors duration-300 font-semibold
                                pb-1 border-b-2 border-transparent
                                ${activeSection === link.id ? 'text-gold border-gold' : 'hover:border-gold'}
                            `}
                        >
                            {link.name}
                        </button>
                    ))}
                    {/* <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gold text-deep-blue font-bold py-2 px-6 rounded-full shadow-lg hover:bg-gold transition-all duration-300"
                        onClick={() => scrollToSection('home')}
                    >
                        Donate
                    </motion.button> */}
                </nav>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-cream-white focus:outline-none">
                        <motion.svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            animate={{ rotate: menuOpen ? 90 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </motion.svg>
                    </button>
                </div>
            </div>
            
            {/* Mobile Menu */}
            {menuOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-deep-blue shadow-xl"
                >
                    <div className="flex flex-col items-center px-4 pt-2 pb-4 space-y-4">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`
                                    block text-cream-white hover:text-gold font-semibold py-2 w-full text-center transition-colors duration-300
                                    ${activeSection === link.id ? 'text-gold border-b-2 border-gold' : 'hover:border-b-2 hover:border-gold'}
                                `}
                            >
                                {link.name}
                            </button>
                        ))}
                        {/* <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-gold text-deep-blue font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gold transition-all duration-300"
                        >
                            Donate
                        </motion.button> */}
                    </div>
                </motion.div>
            )}
        </header>
    );
};

export default Navbar;