import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 lg:py-32 overflow-x-hidden bg-cream-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div 
                        className="order-2 md:order-1 p-8 rounded-2xl shadow-xl bg-deep-blue text-cream-white"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6">About Us</h2>
                        <p className="text-lg text-cream-white mb-4 leading-relaxed">
                            Family Anchor is a non-profit, international, and non-denominational organization committed to bringing hope to children and families through the love and truth of Jesus Christ. We serve communities by providing essential support such as food, clothing, school supplies, and financial assistance.
                        </p>
                        <p className="text-lg text-cream-white leading-relaxed">
                            Rooted in compassion and guided by faith, we are on "A Mission for Hope", meeting both physical and spiritual needs to uplift lives and share God’s love across communities, backgrounds, and beliefs.
                        </p>
                    </motion.div>
                    <motion.div 
                        className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.03, y: -5 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <img src="/images/IMG-20250825-WA0017.jpg" alt="Community Outreach" className="w-full h-full object-cover"/>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;