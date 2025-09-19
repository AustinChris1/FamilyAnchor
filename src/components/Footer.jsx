import React from 'react';
import { motion } from 'framer-motion';
import {Mail, Facebook, Instagram} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-deep-blue overflow-x-hidden text-cream-white">
            <div className="container mx-auto px-6 py-12">
                <div className="text-center">
                    <motion.h2 
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-2xl font-bold mb-4 text-F"
                    >
                        Family Anchor Ministry
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-warm-gray font-semibold text-lg italic mb-6"
                    >
                        "Everything we do is rooted in our calling to be 'A Mission for Hope' .... bringing light, love, and practical help in Jesus' name."
                    </motion.p>
                    <div className="flex justify-center space-x-6 mb-6">
                        <motion.a href="https://www.facebook.com/share/19avAKoGnT/" whileHover={{ scale: 1.2, color: '#FFC72C' }} transition={{ type: 'spring', stiffness: 300 }} className="text-warm-gray">
                            <Facebook/>
                        </motion.a>
                        <motion.a href="mailto:info.familyanchor@gmail.com" whileHover={{ scale: 1.2, color: '#FFC72C' }} transition={{ type: 'spring', stiffness: 300 }} className="text-warm-gray">
                            <Mail/>
                        </motion.a>
                        <motion.a href="https://instagram.com/familyanchorministry" whileHover={{ scale: 1.2, color: '#FFC72C' }} transition={{ type: 'spring', stiffness: 300 }} className="text-warm-gray">
                        <Instagram/>
                        </motion.a>
                    </div>
                    <div className="border-t border-warm-gray/30 mt-8 pt-8">
                        <p className="text-warm-gray">&copy; {new Date().getFullYear()} Family Anchor Ministry. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;