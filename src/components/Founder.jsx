// src/components/Founder.jsx

import React from 'react';
import { motion } from 'framer-motion';

const Founder = () => {
    // Collect all founder images into an array for the gallery
    const founderImages = [
        { src: '/images/founder.jpg', alt: 'Lady Patience Uzoma Oguine, Founder (Portrait)' },
        { src: '/images/founder1.jpg', alt: 'Founder in Church Setting' },
        { src: '/images/founder2.jpg', alt: 'Founder with Family or Partners' },
        { src: '/images/founder3.jpg', alt: 'Founder engaged in Ministry' },
    ];

    const textVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, duration: 0.6 },
        },
    };

    const paragraphVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <section id="founder" className="pt-0 bg-deep-blue relative overflow-hidden min-h-screen">
            
            {/* Header section is Deep Blue, main content area is Cream-White.
                The gradient spans the top of the component for the header effect.
            */}
            <div className="pt-24 pb-16 bg-gradient-to-b from-deep-blue via-blue-900 to-cream-white/10 relative z-10">
                <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                    {/* Section Header */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="inline-flex items-center justify-center w-20 h-1 bg-gradient-to-r from-gold to-cream-white rounded-full mb-6"></div>
                        <h2 className="text-5xl lg:text-6xl font-extrabold text-gold mb-4 tracking-tight">
                            Our Founder's Story
                        </h2>
                        <p className="text-cream-white/90 text-lg max-w-3xl mx-auto leading-relaxed">
                            A testimony of divine calling, unwavering faith, and a lifetime dedicated to service.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Main Content Body - Dominantly Cream-White */}
            <div className="bg-cream-white pt-10 pb-20 relative z-20 shadow-inner">
                <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
                        
                        {/* Text Content - Order 1 (Left on large screens) */}
                        <motion.div
                            className="text-lg space-y-8 leading-relaxed text-slate-800 order-2 lg:order-1"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={containerVariants}
                        >
                            <motion.div variants={paragraphVariants}>
                                {/* Prominent Text */}
                                <div className="text-deep-blue font-bold text-2xl lg:text-3xl leading-tight mb-6">
                                    Lady Patience Uzoma Oguine’s journey is nothing short of miraculous. It is a story of divine intervention, steadfast faith, and a heart surrendered to God's calling. 
                                </div>
                            </motion.div>

                            {/* White Box with Gold/Blue Accents */}
                            <motion.div
                                variants={paragraphVariants}
                                className="bg-white text-slate-700 p-8 rounded-2xl shadow-xl border border-gold/50" 
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gold to-amber-400 rounded-full flex items-center justify-center mt-1">
                                        <span className="text-deep-blue text-sm font-bold">1981</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl text-deep-blue mb-3">The Divine Encounter</h3>
                                        <p className="leading-relaxed">
                                        It was the midnight of July 19, 1981, during a Jerusalem Pilgrimage with her husband, when Lady Patience experienced a life-altering vision. While resting at Sharon Hotel in Israel, she found herself lifted from her bed by an unseen force, her entire being overwhelmed by a divine presence. In that sacred moment, the voice of the Lord spoke clearly, <span className="font-semibold italic text-amber-700">“That old thing need to go out of your life... where we are going, there is no discrimination.”</span>
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Deep Blue Box */}
                                <motion.div variants={paragraphVariants}>
                                    <div className="bg-deep-blue p-6 rounded-xl border-l-4 border-gold shadow-lg h-full text-cream-white">
                                        <div className="flex items-center space-x-3 mb-3">
                                            <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center">
                                                <span className="text-deep-blue text-xs font-bold">✨</span>
                                            </div>
                                            <h4 className="font-semibold text-gold">Divine Mission</h4>
                                        </div>
                                        <p className="text-cream-white/90 leading-relaxed text-base">
                                        Upon returning to Nigeria, this newfound purpose drove her to dedicate herself to the work of God's kingdom, particularly in the area of children’s ministry. Her commitment led to the establishment of several impactful ministries, including Anglican Children Ministry (ACM) Woliwo Onitsha, Anglican Children Ministry (ACM) Osumenyi, and the Anglican Church of Resurrection Woliwo Onitsha.
                                        </p>
                                    </div>
                                </motion.div>
                                {/* White Box */}
                                <motion.div variants={paragraphVariants}>
                                    <div className="bg-white text-slate-700 p-6 rounded-xl shadow-lg h-full flex items-center border border-gold/50">
                                        <p className="leading-relaxed text-base">
                                        In collaboration with her late husband, Sir Godson Ejidike Oguine, she founded <span className="font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Family Anchor Ministry</span>. This interdenominational, non-governmental organization has become a beacon of hope, providing guidance and spiritual nourishment to countless families and children.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                            
                            <motion.div variants={paragraphVariants}>
                                <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-xl border-l-4 border-deep-blue">
                                    <div className="flex-shrink-0 w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                                        <span className="text-deep-blue text-lg font-bold">🌟</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-deep-blue mb-2">Global Impact</h4>
                                        <p className="leading-relaxed">
                                        As a passionate evangelist and church builder, Lady Patience has traveled extensively, leaving a lasting impact wherever she goes. Her tireless efforts have seen the Church of Resurrection grow to serve over <span className="font-bold text-amber-600">1000 Bible-believing converts and worshippers</span>—a true testament to her dedication and obedience to God’s calling.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                            
                            <motion.div variants={paragraphVariants}>
                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gold/50">
                                    <div className="flex items-center space-x-3 mb-3">
                                        <div className="w-8 h-8 bg-gradient-to-br from-gold to-amber-400 rounded-full flex items-center justify-center">
                                            <span className="text-deep-blue text-sm font-bold">❤️</span>
                                        </div>
                                        <h4 className="font-semibold text-deep-blue">A Legacy of Love</h4>
                                    </div>
                                    <p className="leading-relaxed">
                                      A mother to <span className="font-bold text-amber-700">11</span> children, with many grandchildren and great-grandchildren, Lady Patience has raised a legacy of faith and service that extends across generations. Her life is a powerful reminder of the transformative power of God’s love and the difference one faithful servant can make in the world.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div 
                                variants={paragraphVariants}
                                className="text-center pt-8"
                            >
                                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold to-amber-400 text-deep-blue px-8 py-4 rounded-full shadow-2xl">
                                    <span className="text-lg font-semibold italic">To God be the glory</span>
                                    <div className="w-6 h-6 bg-deep-blue bg-opacity-10 rounded-full flex items-center justify-center">
                                        <span className="text-deep-blue text-sm">🙏</span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Image Section - Order 2 (Right on large screens) with Dynamic Masonry Grid */}
                        <motion.div
                            className="relative flex justify-center lg:justify-start order-1 lg:order-2"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={imageVariants}
                        >
                            <div className="grid grid-cols-2 gap-4 w-full max-w-lg lg:max-w-none">
                                {/* Primary Image: Spanning 2 columns, 2 rows (prominent) */}
                                <motion.div 
                                    className="relative col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-2xl border-4 border-deep-blue/50 group"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img
                                        src={founderImages[0].src}
                                        alt={founderImages[0].alt}
                                        className="w-full h-full object-cover aspect-[4/3]" // Use a fixed aspect ratio for the main image
                                    />
                                    <div className="absolute inset-0 bg-deep-blue opacity-10 group-hover:opacity-0 transition-opacity duration-300"></div>
                                </motion.div>

                                {/* Secondary Images: Masonry/Gallery Style */}
                                {founderImages.slice(1).map((img, index) => (
                                    <motion.div
                                        key={index}
                                        className="relative rounded-xl overflow-hidden shadow-lg border-2 border-gold/30"
                                        whileHover={{ scale: 1.05, borderColor: '#FFD700' }} 
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="w-full h-auto object-contain bg-deep-blue" // Key change: object-contain with a deep blue background
                                        />
                                        <div className="absolute inset-0 bg-deep-blue opacity-10 hover:opacity-0 transition-opacity duration-300"></div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founder;