import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-deep-blue text-cream-white">
            <div className="container mx-auto px-6 py-12">
                <div className="text-center">
                    <motion.h2 
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-2xl font-bold mb-4 text-gold"
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
                        <motion.a href="#" whileHover={{ scale: 1.2, color: '#FFC72C' }} transition={{ type: 'spring', stiffness: 300 }} className="text-warm-gray">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 8.096 8.438 9.03v-6.988h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 20.1 22 17.006 22 12z" /></svg>
                        </motion.a>
                        <motion.a href="#" whileHover={{ scale: 1.2, color: '#FFC72C' }} transition={{ type: 'spring', stiffness: 300 }} className="text-warm-gray">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.417 2.865 8.167 6.839 9.578.5.09.682-.218.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.334-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.68-.103-.253-.446-1.272.098-2.65 0 0 .84-.268 2.75 1.022A9.638 9.638 0 0112 6.844c.85.004 1.701.113 2.516.331 1.909-1.29 2.747-1.022 2.747-1.022.546 1.379.202 2.398.099 2.65.64.692 1.028 1.587 1.028 2.68 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.334-.012 2.41-.012 2.724 0 .267.18.577.688.484C20.137 20.165 24 16.416 24 12.017 24 6.484 19.522 2 14 2h-2z" /></svg>
                        </motion.a>
                        <motion.a href="#" whileHover={{ scale: 1.2, color: '#FFC72C' }} transition={{ type: 'spring', stiffness: 300 }} className="text-warm-gray">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.772 1.69 4.91 4.91.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.252-1.69 4.772-4.91 4.91-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.772-1.69-4.91-4.91-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.252 1.69-4.772 4.91-4.91.229-.01.554-.016.882-.016h2.24c.328 0 .653.006.882.016zm0 2.213c-3.666 0-4.07.016-5.48.08c-2.614.12-3.64 1.15-3.76 3.76-.064 1.41-.08 1.814-.08 5.48s.016 4.07.08 5.48c.12 2.614 1.15 3.64 3.76 3.76 1.41.064 1.814.08 5.48.08s4.07-.016 5.48-.08c2.614-.12 3.64-1.15 3.76-3.76.064-1.41.08-1.814.08-5.48s-.016-4.07-.08-5.48c-.12-2.614-1.15-3.64-3.76-3.76-1.41-.064-1.814-.08-5.48-.08zm0 1.81c-4.433 0-8.037 3.604-8.037 8.037s3.604 8.037 8.037 8.037 8.037-3.604 8.037-8.037-3.604-8.037-8.037-8.037zm0 13.258c-2.88 0-5.221-2.34-5.221-5.221s2.34-5.221 5.221-5.221 5.221 2.34 5.221 5.221-2.34 5.221-5.221 5.221zm6.818-12.8a1.325 1.325 0 100-2.65 1.325 1.325 0 000 2.65z" /></svg>
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