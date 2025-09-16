import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const testimonials = [
    {
        quote: "Family Anchor Ministry has been a lifeline for our family. The support we received has transformed our lives and given us a renewed sense of hope.",
        author: "Ugwah Family",
        image: "https://images.unsplash.com/photo-1594950346083-2070e5b512e0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        quote: "Through their outreach programs, my children received the school supplies they needed, and we felt the genuine love of God in a tangible way.",
        author: "Chukwuma A.",
        image: "https://images.unsplash.com/photo-1594950346083-2070e5b512e0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    },
    {
        quote: "We were in a difficult season, and Family Anchor provided not just food and clothing, but also spiritual guidance and encouragement that brought us through.",
        author: "Mr. Victor Moses",
        image: "https://images.unsplash.com/photo-1594950346083-2070e5b512e0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
    }
];

const Stories = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1 }
    };

    return (
        <section id="stories" className="py-20 lg:py-32 bg-cream-white/50">
            <div className="container mx-auto px-6 text-center">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-4xl font-bold text-deep-blue mb-16"
                >
                    Stories of Hope
                </motion.h2>
                <motion.div 
                    ref={ref}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                >
                    {testimonials.map((story, index) => (
                        <motion.div 
                            key={index}
                            className="bg-deep-blue p-8 rounded-2xl shadow-xl flex flex-col items-center text-center border-t-4 border-gold"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <p className="text-lg text-cream-white italic mb-4">"{story.quote}"</p>
                            <p className="font-bold text-gold">{story.author}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Stories;