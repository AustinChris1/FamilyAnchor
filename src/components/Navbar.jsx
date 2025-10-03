import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navigate = useNavigate();
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const navLinks = [
        { name: "About", id: "about", type: "section" },
        { name: "Founder's Story", id: "founder-page", url: '/founder', type: "route" }, 
        { name: "Mission", id: "mission", type: "section" },
        { name: "Gallery", id: "gallery", type: "section" },
        { name: "Impact", id: "impact", type: "section" },
        { name: "Programs", id: "programs", type: "section" },
        { name: "Stories", id: "stories", type: "section" },
        { name: "Get Involved", id: "getinvolved", type: "section" },
        { name: "Contact", id: "contact", type: "section" }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Intersection Observer only runs on the Home Page
    useEffect(() => {
        if (!isHomePage) return; // Skip observer if not on home page

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

        navLinks.filter(link => link.type === 'section').forEach(link => {
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
    }, [navLinks, isHomePage]);


    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
        }
    };

    const handleSectionLinkClick = (e, link) => {
        e.preventDefault();
        setMenuOpen(false); // Always close mobile menu on click

        if (!isHomePage) {
            // If NOT on the home page, navigate to home with the hash
            // This tells react-router-dom to scroll after the page loads
            navigate(`/#${link.id}`);
        } else {
            // If on the home page, just smooth scroll
            scrollToSection(link.id);
        }
    };

    const handleRouteLinkClick = () => {
        setMenuOpen(false); // Close mobile menu when navigating to a new route
    };

    const backgroundClass = scrolled 
        ? 'bg-deep-blue/90 shadow-2xl backdrop-blur-md' 
        : 'bg-transparent';
    
    const finalMobileMenuClass = menuOpen 
        ? (scrolled 
            ? 'bg-deep-blue/90 shadow-2xl backdrop-blur-md' 
            : 'bg-deep-blue shadow-3xl') 
        : '';

    // A unified render function to choose between Link and a/button based on type
    const renderNavLink = (link, isMobile = false) => {
        // Active logic: if we are on the homepage, use activeSection. Otherwise, highlight 'founder-page' if we're on its route.
        const isActive = isHomePage 
            ? activeSection === link.id
            : link.id === 'founder-page' && location.pathname === link.url;

        const baseClass = isMobile 
            ? `block text-cream-white hover:text-gold font-semibold py-2 w-full text-center transition-colors duration-300 ${isActive ? 'text-gold border-b-2 border-gold' : 'hover:border-b-2 hover:border-gold'}`
            : `text-cream-white hover:text-gold transition-colors duration-300 font-semibold pb-1 border-b-2 border-transparent ${isActive ? 'text-gold border-gold' : 'hover:border-gold'}`;

        if (link.type === 'route') {
            return (
                <Link
                    key={link.id}
                    to={link.url}
                    onClick={handleRouteLinkClick}
                    className={baseClass}
                >
                    {link.name}
                </Link>
            );
        } else {
            // Use an anchor tag for smooth scrolling sections, with onClick to handle navigation if needed
            return (
                <a
                    key={link.id}
                    // For routing/scrolling to work from any page, the href should point home with a hash.
                    href={`/#${link.id}`} 
                    onClick={(e) => handleSectionLinkClick(e, link)}
                    className={baseClass}
                >
                    {link.name}
                </a>
            );
        }
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${backgroundClass}`}>
            <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-extrabold tracking-widest">
                    <Link to='/' onClick={() => scrollToSection('home')} className="flex items-center space-x-2 focus:outline-none">
                        <img src="/logo.jpg" alt="Family Anchor" className='w-8 h-8' />
                        <span className="text-cream-white font-extrabold">Family Anchor</span>
                    </Link>
                </div>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => renderNavLink(link))}
                </nav>

                {/* Mobile Navigation Toggle */}
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
                    className={`md:hidden ${finalMobileMenuClass}`} 
                >
                    <div className="flex flex-col items-center px-4 pt-2 pb-4 space-y-4">
                        {navLinks.map((link) => renderNavLink(link, true))}
                    </div>
                </motion.div>
            )}
        </header>
    );
};

export default Navbar;