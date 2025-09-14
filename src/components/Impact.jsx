import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';

const NumberCounter = ({ n }) => {
    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.span>{number.to(n => n.toFixed(0))}</animated.span>;
};

const Impact = () => {
    const stats = [
        { label: "Families Served", value: 1500, icon: "family" },
        { label: "Meals Provided", value: 50000, icon: "food" },
        { label: "Books Distributed", value: 10000, icon: "book" },
        { label: "Lives Touched", value: 2500, icon: "heart" }
    ];

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const controls = useAnimation();

    useEffect(() => {
      if (isInView) {
        controls.start("visible");
      }
    }, [isInView, controls]);

    const variants = {
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          staggerChildren: 0.2,
        },
      },
      hidden: { opacity: 0, y: 20 },
    };

    const itemVariants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
    };

    return (
        <section id="impact" className="py-20 lg:py-32 bg-deep-blue text-cream-white">
            <div className="container mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-4xl font-bold text-gold mb-16"
                >
                    Our Impact
                </motion.h2>
                <motion.div
                    ref={ref}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center p-6 rounded-2xl shadow-xl border-t-4 border-gold bg-deep-blue"
                            variants={itemVariants}
                        >
                            <div className="text-gold mb-4">
                                {stat.icon === "family" && <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.122-1.274-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.122-1.274.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                                {stat.icon === "food" && <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v2a2 2 0 01-2 2h-6a2 2 0 01-2-2v-2a2 2 0 012-2h6zM5 11a2 2 0 012-2h2m0 0a2 2 0 002-2V4a2 2 0 00-2-2H9a2 2 0 00-2 2v2a2 2 0 002 2zm7 0h2m-2 0a2 2 0 012 2v2a2 2 0 01-2 2h-6a2 2 0 01-2-2v-2a2 2 0 012-2h6zm0 0h2m-2 0a2 2 0 012 2v2a2 2 0 01-2 2h-6a2 2 0 01-2-2v-2a2 2 0 012-2h6z" /></svg>}
                                {stat.icon === "book" && <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.484 9.227 5 7.5 5S4.168 5.484 3 6.253M12 6.253C13.168 5.484 14.773 5 16.5 5s3.332.484 4.5 1.253M12 6.253V13.5m-3-11v.5m0 3a2 2 0 11-4 0 2 2 0 014 0zm0 6a2 2 0 11-4 0 2 2 0 014 0zm0 6a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                                {stat.icon === "heart" && <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}
                            </div>
                            <h3 className="text-4xl font-extrabold text-gold mb-1">{isInView ? <NumberCounter n={stat.value} /> : 0}+</h3>
                            <p className="text-sm font-semibold text-warm-gray">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Impact;