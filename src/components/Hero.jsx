// src/components/Hero.jsx

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import * as THREE from 'three';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

// Import the specific images you want for the hero slider
const heroImages = [
    { src: '/images/face1.jpeg', alt: 'Family Anchor' },
    { src: '/images/face2.jpeg', alt: 'A mission for hope' },
    { src: '/images/IMG-20250825-WA0020.jpg', alt: 'Empowering communities' },
    { src: '/images/face3.jpeg', alt: 'Empowering communities' },
];

const ParticleStarfield = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const currentMount = mountRef.current;
        if (!currentMount) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        currentMount.appendChild(renderer.domElement);

        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 10000;
        const positions = new Float32Array(particlesCount * 3);
        const colors = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 10;
            positions[i + 1] = (Math.random() - 0.5) * 10;
            positions[i + 2] = (Math.random() - 0.5) * 10;
            colors[i] = 1;
            colors[i + 1] = 0.78;
            colors[i + 2] = 0.17;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.02,
            vertexColors: true,
            sizeAttenuation: true,
            blending: THREE.AdditiveBlending
        });

        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);

        camera.position.z = 2;

        const clock = new THREE.Clock();

        const animate = () => {
            const elapsedTime = clock.getElapsedTime();
            particles.rotation.y = elapsedTime * 0.02;
            particles.rotation.x = elapsedTime * 0.01;
            particles.material.size = 0.02 + Math.sin(elapsedTime * 0.5) * 0.01;
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            currentMount.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} className="absolute top-0 left-0 w-full h-full opacity-30" />;
};

const Hero = () => {
    const scrollRef = useRef(null);
    const isInView = useInView(scrollRef);
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.08,
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="overflow-x-hidden">
            <section id="home" className="relative min-h-screen flex items-center bg-deep-blue justify-center">
                <ParticleStarfield />
                
                <div className="relative z-20 container mx-auto px-6 h-full flex flex-col md:flex-row items-center md:justify-between text-center md:text-left pt-24 pb-12 md:py-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-xl mx-auto md:mx-0 md:w-1/2"
                    >
                        <motion.h1 
                            ref={scrollRef} 
                            variants={variants}
                            initial="hidden"
                            animate={controls}
                            className="text-3xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-snug text-cream-white"
                        >
                            {"Family Anchor Ministry".split(" ").map((word, index) => (
                                <motion.span key={index} variants={childVariants} className="inline-block mr-2">
                                    {word}
                                </motion.span>
                            ))}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-xl md:text-3xl font-light text-gold mb-8"
                        >
                            A Mission for Hope
                        </motion.p>
                    </motion.div>
                    
                    <div className="relative w-full h-[50vh] md:w-1/2 md:h-full mt-12 md:mt-0 md:ml-12 overflow-hidden rounded-xl shadow-2xl">
                        <Swiper
                            modules={[Autoplay, EffectFade]}
                            effect="fade"
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            loop={true}
                            speed={1000}
                            className="w-full h-full"
                        >
                            {heroImages.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <img 
                                        src={img.src} 
                                        alt={img.alt} 
                                        className="object-cover w-full h-full"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="absolute top-0 left-0 w-full h-full bg-deep-blue/60 z-10 hidden md:block" />
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <svg className="w-8 h-8 text-cream-white cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Hero;