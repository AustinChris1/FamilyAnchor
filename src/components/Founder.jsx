import React from 'react';
import { motion } from 'framer-motion';

const Founder = () => {
    const image = '/images/founder.jpg';

    const textVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.6,
            },
        },
    };

    const paragraphVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section id="founder" className="py-20 bg-gradient-to-br from-cream-white via-orange-50 to-yellow-50 text-slate-800 relative overflow-hidden">
            {/* Elegant Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full -translate-x-32 -translate-y-32 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-300 to-amber-300 rounded-full translate-x-32 translate-y-32 blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-20 w-3 h-3 bg-gold rounded-full animate-pulse delay-75"></div>
            <div className="absolute bottom-20 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-150"></div>
            <div className="absolute bottom-32 right-32 w-1 h-1 bg-amber-500 rounded-full animate-pulse delay-300"></div>
            
            <div className="container mx-auto px-6 lg:px-8 relative z-10 max-w-7xl">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="inline-flex items-center justify-center w-16 h-1 bg-gradient-to-r from-amber-400 to-gold rounded-full mb-6"></div>
                    <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent mb-4">
                        Our Founder's Story
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        A testament to divine calling and unwavering faith
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    {/* Image Section */}
                    <motion.div
                        className="flex justify-center lg:justify-end order-2 lg:order-1"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={imageVariants}
                    >
                        <div className="relative group">
                            {/* Decorative background elements */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-800 via-blue-900 to-deep-blue rounded-2xl blur-2xl opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
                            <div className="absolute -inset-2 bg-gradient-to-r from-deep-blue to-deep-blue rounded-2xl opacity-20"></div>
                            
                            {/* Main image container */}
                            <div className="relative bg-white p-3 rounded-2xl shadow-2xl transform transition-transform duration-300 group-hover:scale-105">
                                <div className="relative overflow-hidden rounded-xl">
                                    <img
                                        src={image}
                                        alt="Lady Patience Uzoma Oguine, Founder"
                                        className="w-full h-auto rounded-xl object-cover border-4 border-amber-300"
                                    />
                                </div>
                                
                                {/* Floating quote bubble */}
                                <div className="absolute -top-6 -right-6 bg-white rounded-full p-4 shadow-lg border-2 border-amber-200">
                                    <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-gold rounded-full flex items-center justify-center">
                                        <span className="text-white text-xl font-bold">"</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        className="text-lg space-y-8 leading-relaxed order-1 lg:order-2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.div variants={paragraphVariants}>
                            <div className="bg-gradient-to-r from-deep-blue to-blue-500 bg-clip-text text-transparent font-bold text-2xl lg:text-3xl leading-tight mb-6">
                                Lady Patience Uzoma Oguine’s journey is nothing short of miraculous. It is a story of divine intervention, steadfast faith, and a heart surrendered to God's calling. What began as a personal encounter with the Lord in 1981, in the most unexpected of places, forever changed the course of her life.
                            </div>
                        </motion.div>

                        <motion.div
                            variants={paragraphVariants}
                            className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg border border-amber-100"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-amber-400 to-gold rounded-full flex items-center justify-center mt-1">
                                    <span className="text-white text-sm font-bold">1981</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-slate-800 mb-3">The Divine Encounter</h3>
                                    <p className="text-slate-700 leading-relaxed">
                                        It was the midnight of July 19, 1981, during a Jerusalem Pilgrimage with her husband, when Lady Patience experienced a life-altering vision. While resting at Sharon Hotel in Israel, she found herself lifted from her bed by an unseen force, her entire being overwhelmed by a divine presence. In that sacred moment, the voice of the Lord spoke clearly, <span className="font-semibold italic text-amber-700">“That old thing need to go out of your life... where we are going, there is no discrimination.”</span>
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={paragraphVariants}>
                            <div className="bg-gradient-to-r from-amber-100 via-orange-50 to-yellow-100 p-6 rounded-xl border-l-4 border-amber-400 shadow-sm">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-6 h-6 bg-gradient-to-br from-deep-blue to-gold rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs font-bold">✨</span>
                                    </div>
                                    <h4 className="font-semibold text-slate-800">Divine Mission</h4>
                                </div>
                                <p className="italic text-slate-700 leading-relaxed">
                                    Upon returning to Nigeria, this newfound purpose drove her to dedicate herself to the work of God's kingdom, particularly in the area of children’s ministry. Her commitment led to the establishment of several impactful ministries, including Anglican Children Ministry (ACM) Woliwo Onitsha, Anglican Children Ministry (ACM) Osumenyi, and the Anglican Church of Resurrection Woliwo Onitsha.
                                </p>
                            </div>
                        </motion.div>
                        
                        <motion.div variants={paragraphVariants}>
                            <p className="text-slate-700 leading-relaxed text-lg">
                                In collaboration with her late husband, Sir Godson Ejidike Oguine, she founded <span className="font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Family Anchor Ministry</span>. This interdenominational, non-governmental organization has become a beacon of hope, providing guidance and spiritual nourishment to countless families and children.
                            </p>
                        </motion.div>
                        
                        <motion.div variants={paragraphVariants}>
                            <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm border border-amber-100">
                                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gold to-deep-blue rounded-full flex items-center justify-center">
                                    <span className="text-white text-lg font-bold">🌟</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-2">Global Impact</h4>
                                    <p className="text-slate-700 leading-relaxed">
                                        As a passionate evangelist and church builder, Lady Patience has traveled extensively, leaving a lasting impact wherever she goes. Her tireless efforts have seen the Church of Resurrection grow to serve over <span className="font-bold text-amber-600">1000 worshippers</span>—a true testament to her dedication and obedience to God’s calling.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={paragraphVariants}>
                            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-8 h-8 bg-gradient-to-br from-deep-blue to-gold rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm font-bold">❤️</span>
                                    </div>
                                    <h4 className="font-semibold text-slate-800">A Legacy of Love</h4>
                                </div>
                                <p className="text-slate-700 leading-relaxed">
                                    A mother to <span className="font-bold text-amber-700">11</span> children, with many grandchildren and great-grandchildren, Lady Patience has raised a legacy of faith and service that extends across generations. Her life is a powerful reminder of the transformative power of God’s love and the difference one faithful servant can make in the world.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div 
                            variants={paragraphVariants}
                            className="text-center pt-8"
                        >
                            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-400 to-gold text-white px-8 py-4 rounded-full shadow-lg">
                                <span className="text-lg font-semibold italic">To God be the glory</span>
                                <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                                    <span className="text-sm">🙏</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Founder;