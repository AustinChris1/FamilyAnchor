import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import * as THREE from 'three';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination'; // Import the pagination styles

// Import the specific images you want for the hero slider
const heroImages = [
    { src: '/images/landing8.jpg', alt: 'Family Anchor' },
    { src: '/images/landing1.jpg', alt: 'Family Anchor' },
    { src: '/images/landing2.jpg', alt: 'Family Anchor' },
    { src: '/images/landing3.jpg', alt: 'Family Anchor' },
    { src: '/images/landing4.jpg', alt: 'Family Anchor' },
    { src: '/images/landing5.jpg', alt: 'Family Anchor' },
    { src: '/images/landing6.jpg', alt: 'Family Anchor' },
    { src: '/images/landing7.jpg', alt: 'Family Anchor' },
    { src: '/images/landing9.jpg', alt: 'Family Anchor' },
];

const ParticleStarfield = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const currentMount = mountRef.current;
        if (!currentMount) return;

        let scene, camera, renderer, particles;

        const init = () => {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

            renderer.setSize(window.innerWidth, window.innerHeight);
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

            particles = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(particles);

            camera.position.z = 2;
        };

        const clock = new THREE.Clock();
        const animate = () => {
            const elapsedTime = clock.getElapsedTime();
            if (particles) {
                particles.rotation.y = elapsedTime * 0.02;
                particles.rotation.x = elapsedTime * 0.01;
                particles.material.size = 0.02 + Math.sin(elapsedTime * 0.5) * 0.01;
            }
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        const handleResize = () => {
            if (renderer && camera) {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            }
        };

        init();
        animate();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (currentMount && renderer.domElement) {
                currentMount.removeChild(renderer.domElement);
            }
            if (particles) {
                particles.geometry.dispose();
                particles.material.dispose();
            }
            if (renderer) {
                renderer.dispose();
            }
        };
    }, []);

    // Change 'fixed' to 'absolute' to contain it within its parent
    return <div ref={mountRef} className="absolute top-0 left-0 w-full h-full opacity-30 z-0" />;
};

const Hero = () => {
    const scrollRef = useRef(null);
    const isInView = useInView(scrollRef, { once: true, amount: 0.5 });
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

                    {/* Adjusted dimensions for larger images */}
                    <div className="relative w-full h-[60vh] md:w-1/2 md:h-[70vh] mt-12 md:mt-0 md:ml-12 rounded-xl shadow-2xl">
                        <Swiper
                            modules={[Autoplay, EffectFade, Pagination]}
                            effect="fade"
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            loop={true}
                            speed={1000}
                            pagination={{ clickable: true }}
                            className="w-full h-full rounded-xl"
                        >
                            {heroImages.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="object-contain w-full h-full"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
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