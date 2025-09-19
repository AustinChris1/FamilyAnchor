import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Twitter, Facebook, Linkedin } from 'lucide-react';

const members = [
    {
        name: 'Lady Patience Oguine',
        title: 'Founder',
        image: '/images/founder.jpg',
        social: { twitter: '#', facebook: '#', linkedin: '#' }
    },
    {
        name: 'Pharm. Chigozie Oguine',
        title: 'Chairman of the Board',
        image: '/images/ChigozieOguine.jpg',
        social: { twitter: '', facebook: '#', linkedin: '' }
    },
    {
        name: 'Godson Ugochukwu Oguine. Esq.',
        title: 'Secretary of the Board',
        image: '/images/GodsonUgochukwu.jpg',
        social: { twitter: '#', facebook: '#', linkedin: '#'}
    },
    {
        name: 'Dame Ezinne Ifeyinwa Ukachukwu',
        title: 'Treasurer of the Board',
        image: '/images/Dame%20Ezinne%20Ifeyinwa%20Ukachukwu.jpg',
        social: { twitter: '#', facebook: '#', linkedin: '#' }
    },
    {
        name: 'Mr. Charles Orji',
        title: 'Program Director',
        image: '/images/MrCharlesOrji.jpg',
        social: { twitter: '#', facebook: '#', linkedin: '#' }
    },
    {
        name: 'Hon. Elias Ukachukwu',
        title: 'Partner',
        image: '/images/HonEliasUkachukwu.jpg',
        social: { twitter: '#', facebook: '#', linkedin: '#' }
    },
    {
        name: 'Dr. Uju Osagie',
        title: 'Board Member',
        image: '/images/DrUjuOsagie.jpeg',
        social: { twitter: '', facebook: '', linkedin: '' }
    },
    {
        name: 'Dr. Amara Albert',
        title: 'Board Member',
        image: '/images/deaconess.jpg',
        social: { twitter: '#', facebook: '#', linkedin: '#' }
    },
    {
        name: 'Mrs. Ada Mbanaso',
        title: 'Board Member',
        image: '/images/Ada%20Mbanaso.jpg',
        social: { twitter: '#', facebook: '#', linkedin: '#' }
    },
    {
        name: 'Sir. Chuma Oguine',
        title: 'Board Member',
        image: '/images/chumaOguine.jpg',
        social: { twitter: '#', facebook: '#', linkedin: '#' }
    },
    {
        name: 'Lady Adaobi Oguine',
        title: 'Board Member',
        image: '/images/LadyAdaobiOguine.jpg',
        social: { twitter: '#', facebook: '#', linkedin: '#' }
    },
    {
        name: 'Mrs. Charity Oguine',
        title: 'Board Member',
        image: '/images/Mrs%20Charity%20Oguine.jpg',
        social: { twitter: '#', facebook: '#', linkedin: '#' }
    },
    {
        name: 'Mrs. Chinyere Okeke',
        title: 'Board Member',
        image: '/images/chinyereokeke.jpg',
        social: { twitter: '#', facebook: '#', linkedin: '#' }
    },
    {
        name: 'Pastor Mrs. Gloria Mbaoma, Esq.',
        title: 'Board Member',
        image: '/images/Gloria%20Mbaoma.jpg',
        social: { twitter: '#', facebook: '#', linkedin: '#' }
    },
    {
        name: 'Chinny Ijezie',
        title: 'Board Member',
        image: '/images/chinnyIjezie.jpg',
        social: { twitter: '#', facebook: '#', linkedin: '#' }
    },
    {
        name: 'Mrs. Nkiru Onuchukwu',
        title: 'Board Member',
        image: '/images/MrsNkiru.jpg',
        social: { twitter: '#', facebook: '#', linkedin: '#' }
    },
    {
        name: 'Onyii Oguine',
        title: 'Board Member',
        image: '/images/onyiiOguine.jpg',
        social: { twitter: '#', facebook: '#', linkedin: '#' }
    },
];

const allGalleryImages = [
    '/images/IMG-20201108-WA0010.jpg',
    '/images/IMG-20201108-WA0012.jpg',
    '/images/IMG-20201108-WA0014.jpg',
    '/images/IMG-20201108-WA0015.jpg',
    '/images/IMG-20201108-WA0016.jpg',
    '/images/IMG-20201108-WA0022.jpg',
    '/images/IMG-20201108-WA0023.jpg',
    '/images/IMG-20201108-WA0033.jpg',
    '/images/IMG-20201108-WA0035.jpg',
    '/images/IMG-20201108-WA0036.jpg',
    '/images/IMG-20201115-WA0000.jpg',
    '/images/IMG-20201229-WA0003.jpg',
    '/images/IMG-20210829-WA0016.jpg',
    '/images/IMG-20220106-WA0077.jpg',
    '/images/IMG-20220106-WA0142.jpg',
    '/images/IMG-20220106-WA0174.jpg',
    '/images/IMG-20221229-WA0005.jpg',
    '/images/IMG-20221229-WA0035.jpg',
    '/images/IMG-20221229-WA0038.jpg',
    '/images/IMG-20230616-WA0010.jpg',
    '/images/IMG-20230616-WA0012.jpg',
    '/images/IMG-20230616-WA0014.jpg',
    '/images/IMG-20230616-WA0017.jpg',
    '/images/IMG-20230616-WA0019.jpg',
    '/images/IMG-20230616-WA0020.jpg',
    '/images/IMG-20230616-WA0022.jpg',
    '/images/IMG-20230616-WA0031.jpg',
    '/images/IMG-20231229-WA0052.jpg',
    '/images/IMG-20240615-WA0021.jpg',
    '/images/IMG-20240922-WA0011.jpg',
    '/images/IMG-20240922-WA0024.jpg',
    '/images/IMG-20240922-WA0026.jpg',
    '/images/IMG-20240922-WA0029.jpg',
    '/images/IMG-20241014-WA0001.jpg',
    '/images/IMG-20241014-WA0050.jpg',
    '/images/IMG-20241227-WA0041.jpg',
    '/images/IMG-20241227-WA0051.jpg',
    '/images/IMG-20250131-WA0007.jpg',
    '/images/IMG-20250131-WA0008.jpg',
    '/images/IMG-20250131-WA0011.jpg',
    '/images/IMG-20250131-WA0017.jpg',
    '/images/IMG-20250131-WA0018.jpg',
    '/images/IMG-20250131-WA0020.jpg',
    '/images/IMG-20250131-WA0021.jpg',
    '/images/IMG-20250131-WA0026.jpg',
    '/images/IMG-20250131-WA0028.jpg',
    '/images/IMG-20250131-WA0029.jpg',
];

const CustomCarousel = ({ children, slidesToShow = 3 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShowCurrent, setSlidesToShowCurrent] = useState(slidesToShow);

    React.useEffect(() => {
        const updateSlidesToShow = () => {
            if (window.innerWidth < 640) {
                setSlidesToShowCurrent(1);
            } else if (window.innerWidth < 1024) {
                setSlidesToShowCurrent(2);
            } else {
                setSlidesToShowCurrent(3);
            }
        };

        updateSlidesToShow();
        window.addEventListener('resize', updateSlidesToShow);
        return () => window.removeEventListener('resize', updateSlidesToShow);
    }, []);

    const totalSlides = React.Children.count(children);
    const maxIndex = Math.max(0, totalSlides - slidesToShowCurrent);

    const next = () => {
        setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
    };

    const prev = () => {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
    };

    // Auto-slide functionality
    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
        }, 4000);
        
        return () => clearInterval(interval);
    }, [maxIndex]);

    const translateX = -(currentIndex * (100 / slidesToShowCurrent));

    return (
        <div className="relative overflow-hidden">
            <button
                onClick={prev}
                disabled={currentIndex === 0}
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg border transition-all duration-200 ${
                    currentIndex === 0 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-yellow-400 hover:shadow-xl'
                }`}
                style={{ marginLeft: '-20px' }}
            >
                <ArrowLeft size={20} className="text-blue-900" />
            </button>

            <button
                onClick={next}
                disabled={currentIndex >= maxIndex}
                className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg border transition-all duration-200 ${
                    currentIndex >= maxIndex 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-yellow-400 hover:shadow-xl'
                }`}
                style={{ marginRight: '-20px' }}
            >
                <ArrowRight size={20} className="text-blue-900" />
            </button>

            <div className="mx-8">
                <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(${translateX}%)` }}
                >
                    {React.Children.map(children, (child, index) => (
                        <div 
                            key={index}
                            className="flex-shrink-0 px-2"
                            style={{ width: `${100 / slidesToShowCurrent}%` }}
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: maxIndex + 1 }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                            currentIndex === index ? 'bg-yellow-400' : 'bg-gray-300'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

const Gallery = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 9;

    const offset = currentPage * itemsPerPage;
    const currentImages = allGalleryImages.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(allGalleryImages.length / itemsPerPage);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="gallery" className="py-20 bg-amber-50 overflow-x-hidden text-blue-900">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-4xl font-extrabold text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Photo Gallery
                </motion.h2>
                
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {currentImages.map((image, index) => (
                        <motion.div
                            key={index}
                            className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg shadow-xl"
                            variants={itemVariants}
                        >
                            <img
                                src={image}
                                alt={`Gallery image ${index + 1 + offset}`}
                                className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {pageCount > 1 && (
                    <div className="flex justify-center items-center mt-12 space-x-2">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                            disabled={currentPage === 0}
                            className={`p-2 rounded-full border border-yellow-400 transition-colors duration-200 ${
                                currentPage === 0 
                                    ? 'text-gray-400 cursor-not-allowed' 
                                    : 'text-blue-900 hover:bg-yellow-400 hover:text-white'
                            }`}
                        >
                            <ArrowLeft size={20} />
                        </button>
                        
                        {[...Array(pageCount)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentPage(index)}
                                className={`w-8 h-8 rounded-full text-sm font-bold transition-colors duration-200 ${
                                    currentPage === index 
                                        ? 'bg-yellow-400 text-white' 
                                        : 'bg-transparent text-blue-900 hover:bg-yellow-400/20'
                                }`}
                            >
                                {index + 1}
                            </button>
                        ))}
                        
                        <button
                            onClick={() => setCurrentPage(prev => Math.min(pageCount - 1, prev + 1))}
                            disabled={currentPage === pageCount - 1}
                            className={`p-2 rounded-full border border-yellow-400 transition-colors duration-200 ${
                                currentPage === pageCount - 1 
                                    ? 'text-gray-400 cursor-not-allowed' 
                                    : 'text-blue-900 hover:bg-yellow-400 hover:text-white'
                            }`}
                        >
                            <ArrowRight size={20} />
                        </button>
                    </div>
                )}

                <motion.h2
                    className="text-4xl font-extrabold text-center my-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Our Founders & Members
                </motion.h2>

                <CustomCarousel>
                    {members.map((member, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 mx-2"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-yellow-400"
                            />
                            <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
                            <p className="text-gray-600 mb-4">{member.title}</p>
                            <div className="flex space-x-4">
                                {member.social.twitter && member.social.twitter !== '#' && member.social.twitter !== '' && (
                                    <a 
                                        href={member.social.twitter} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-blue-900 hover:text-yellow-500 transition-colors duration-200"
                                    >
                                        <Twitter size={24} />
                                    </a>
                                )}
                                {member.social.facebook && member.social.facebook !== '#' && member.social.facebook !== '' && (
                                    <a 
                                        href={member.social.facebook} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-blue-900 hover:text-yellow-500 transition-colors duration-200"
                                    >
                                        <Facebook size={24} />
                                    </a>
                                )}
                                {member.social.linkedin && member.social.linkedin !== '#' && member.social.linkedin !== '' && (
                                    <a 
                                        href={member.social.linkedin} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-blue-900 hover:text-yellow-500 transition-colors duration-200"
                                    >
                                        <Linkedin size={24} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </CustomCarousel>
            </div>
        </section>
    );
};

export default Gallery;