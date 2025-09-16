import React from 'react';
import { motion } from 'framer-motion';

const Mission = () => {
    return (
        <section id="mission" className="py-20 lg:py-32 overflow-x-hidden bg-deep-blue">
            <div className="container mx-auto px-6 py-16 text-center shadow-xl">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6">Our Mission Statement</h2>
                    <p className="text-lg text-cream-white mb-4 leading-relaxed">
                        At Family Anchor, we are on a mission for hope, to share the truth and love of Jesus Christ with children and families, offering practical support that transforms hearts and lives. Through compassionate outreach and Christ centered services, we provide essential resources such as food, clothing, books, bibles and school supplies, ensuring every child knows they are seen, valued, and deeply loved by God.
                    </p>
                    <p className="text-lg text-gold font-semibold leading-relaxed italic">
                        "A Mission for Hope isn’t just our slogan, it is the heart of everything we do."
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Mission;