import React from 'react';
import { motion } from 'framer-motion';

const GetInvolved = () => {
    const actions = [
        {
            title: "Volunteer",
            description: "Join our team and use your unique skills to serve communities and bring hope to families.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.122-1.274-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.122-1.274.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        },
        {
            title: "Donate",
            description: "Your financial support enables us to provide essential resources and continue our mission.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        },
        {
            title: "Partner",
            description: "Partner with us as a church, business, or community organization to create a bigger impact.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M12 20.354V15a4 4 0 01-4-4v-1.556c0-1.83 2.185-3.084 4-2.45m0 0A3.003 3.003 0 0014 11h-4.354M17.5 14h-11a2 2 0 00-2 2v4a2 2 0 002 2h11a2 2 0 002-2v-4a2 2 0 00-2-2z" /></svg>
        }
    ];
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
        }
    };

    return (
        <section id="getinvolved" className="py-20 lg:py-32 overflow-x-hidden bg-deep-blue text-cream-white">
            <div className="container mx-auto px-6 text-center">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-4xl font-bold text-gold mb-16"
                >
                    Get Involved
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-12">
                    {actions.map((action, index) => (
                        <motion.div 
                            key={index}
                            className="p-8 rounded-2xl shadow-xl flex flex-col items-center text-center bg-deep-blue border-t-4 border-gold cursor-pointer"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            onClick={() => scrollToSection('contact')}
                        >
                            <div className="text-gold mb-4">{action.icon}</div>
                            <h3 className="text-2xl font-bold text-gold mb-3">{action.title}</h3>
                            <p className="text-warm-gray mb-6">{action.description}</p>
                            {/* <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-auto w-full bg-gold text-deep-blue font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gold transition-all duration-300"
                            >
                                Learn More
                            </motion.button> */}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GetInvolved;