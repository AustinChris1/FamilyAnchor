
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Phone } from 'lucide-react';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        emailjs.sendForm('familyAnchor', 'template_80t23yr', form.current, 'B4QJXB35Yq9_rIqBF')
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            });
    };

    return (
        <section id="contact" className="py-20 lg:py-32 bg-cream-white">
            <div className="container overflow-x-hidden mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-4xl font-bold text-deep-blue mb-4"
                    >
                        Get In Touch
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg text-warm-gray max-w-2xl mx-auto"
                    >
                        We'd love to hear from you. Fill out the form below or visit us at one of our locations.
                    </motion.p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <motion.div 
                        className="bg-deep-blue p-8 rounded-2xl shadow-xl text-cream-white"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h3 className="text-2xl font-bold text-gold mb-4">Office Address</h3>
                        <p className="text-lg text-cream-white">
                            23 Godson Oguine Crescent<br/>
                            Asaba. Delta State.<br/>
                            Nigeria.
                        </p>
                        <h3 className="text-2xl font-bold text-gold mt-8 mb-4">Permanent Address</h3>
                        <p className="text-lg text-cream-white">
                            Godson Oguine compound, Umuka village<br/>
                            Osumenyi, Nnewi south L.G.A.<br/>
                            Anambra State, Nigeria.
                        </p>
                        <h3 className="text-2xl font-bold text-gold mt-8 mb-4">Phone</h3>
                        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                            <motion.a 
                                href='tel:+2348033116735'
                                className="inline-flex items-center justify-center p-3 rounded-xl border border-gold text-gold hover:bg-gold hover:text-deep-blue transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Phone className="mr-2" />
                                +234 803 311 6735
                            </motion.a>
                            <motion.a 
                                href='tel:+2347035108928'
                                className="inline-flex items-center justify-center p-3 rounded-xl border border-gold text-gold hover:bg-gold hover:text-deep-blue transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Phone className="mr-2" />
                                +234 703 510 8928
                            </motion.a>
                        </div>
                    </motion.div>
                    <motion.div
                        className="bg-deep-blue p-8 rounded-2xl shadow-xl"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h3 className="text-2xl font-bold text-gold mb-4">Send Us a Message</h3>
                        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-warm-gray">Name</label>
                                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-warm-gray shadow-sm focus:border-gold focus:ring focus:ring-gold focus:ring-opacity-50 transition-colors duration-300 bg-deep-blue text-cream-white" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-warm-gray">Email</label>
                                <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-warm-gray shadow-sm focus:border-gold focus:ring focus:ring-gold focus:ring-opacity-50 transition-colors duration-300 bg-deep-blue text-cream-white" required />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-warm-gray">Phone</label>
                                <input type="phone" id="phone" name="phone" className="mt-1 block w-full rounded-md border-warm-gray shadow-sm focus:border-gold focus:ring focus:ring-gold focus:ring-opacity-50 transition-colors duration-300 bg-deep-blue text-cream-white" required />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-warm-gray">Message</label>
                                <textarea id="message" name="message" rows="4" className="mt-1 block w-full rounded-md border-warm-gray shadow-sm focus:border-gold focus:ring focus:ring-gold focus:ring-opacity-50 transition-colors duration-300 bg-deep-blue text-cream-white" required></textarea>
                            </div>
                            <motion.button 
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-gold text-deep-blue font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gold transition-all duration-300"
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </motion.button>
                        </form>
                        {status === 'success' && <p className="mt-4 text-center text-green-500 font-semibold">Message sent successfully! A team member will reach out to you shortly😊</p>}
                        {status === 'error' && <p className="mt-4 text-center text-red-500 font-semibold">Failed to send message. Please try again later. 😟</p>}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;