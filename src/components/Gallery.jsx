// src/components/Gallery.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReactPaginate from 'react-paginate';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Founder data with image paths
const founders = [
    {
        name: 'Lady Patience Oguine',
        title: 'Founder',
        image: '/images/founder.jpg',
        className: 'col-span-1',
    },
    {
        name: 'Pharm. Chigozie Oguine',
        title: 'Chairman of the Board',
        image: '/images/ChigozieOguine.jpg',
        className: 'col-span-1',
    },
    {
        name: 'Dr. Uju Osagie',
        title: 'Board Member',
        image: '/images/DrUjuOsagie.jpeg',
        className: 'col-span-1',
    },
    {
        name: 'Dr. Amara Albert',
        title: 'Board Member',
        image: '/images/deaconess.jpg',
        className: 'col-span-1',
    },
    {
        name: 'Ada Mbanaso',
        title: 'Board Member',
        image: '/images/Ada Mbanaso.jpg',
        className: 'col-span-1',
    },
    {
        name: 'Mrs. Chinyere Okeke',
        title: 'Board Member',
        image: '/images/chinyereokeke.jpg',
        className: 'col-span-1',
    },
    {
        name: 'Dame Ezinne Ifeyinwa Ukachukwu',
        title: 'Board Member',
        image: '/images/Dame Ezinne Ifeyinwa Ukachukwu.jpg',
        className: 'col-span-1',
    },
    {
        name: 'Gloria Mbaoma',
        title: 'Board Member',
        image: '/images/Gloria Mbaoma.jpg',
        className: 'col-span-1',
    },
    {
        name: 'Mrs Charity Oguine',
        title: 'Board Member',
        image: '/images/Mrs Charity Oguine.jpg',
        className: 'col-span-1',
    },
];

const galleryImages = [
    '/images/cartonsOfIndomie.jpg',
    '/images/IMG-20250825-WA0012.jpg',
    '/images/IMG-20250825-WA0013.jpg',
    '/images/IMG-20250825-WA0014.jpg',
    '/images/IMG-20250825-WA0017.jpg',
    '/images/face1.jpeg',
    '/images/IMG-20250825-WA0019.jpg',
    '/images/face3.jpeg',
    '/images/face2.jpeg',
    '/images/IMG-20250825-WA0022.jpg',
    '/images/IMG-20250825-WA0023.jpg',
    '/images/face5.jpeg',
    '/images/IMG-20250825-WA0037.jpg',
    '/images/IMG-20250825-WA0038.jpg',
    '/images/IMG-20250825-WA0039.jpg',
    '/images/IMG-20250825-WA0040.jpg',
    '/images/IMG-20250825-WA0041.jpg',
    '/images/IMG-20250825-WA0042.jpg',
    '/images/IMG-20250825-WA0043.jpg',
    '/images/IMG-20250825-WA0044.jpg',
    '/images/IMG-20250825-WA0045.jpg',
    '/images/IMG-20250825-WA0046.jpg',
    '/images/IMG-20250825-WA0047.jpg',
    '/images/IMG-20250825-WA0074.jpg',
    '/images/IMG-20250825-WA0076.jpg',
    '/images/face4.jpeg',
];

const Gallery = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 9; // Display 9 images per page

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
        document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })
    };

    const offset = currentPage * itemsPerPage;
    const currentImages = galleryImages.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(galleryImages.length / itemsPerPage);

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
        <section id="gallery" className="py-20 bg-cream-white text-deep-blue">
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
                <div className="flex justify-center mt-12">
                    <ReactPaginate
                        previousLabel={<ArrowLeft />}
                        nextLabel={<ArrowRight />}
                        breakLabel={'...'}
                        breakClassName={'page-item'}
                        breakLinkClassName={'page-link'}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination flex space-x-2 text-deep-blue'}
                        pageClassName={'page-item flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200'}
                        pageLinkClassName={'page-link w-full h-full flex items-center justify-center font-semibold hover:bg-gold hover:text-deep-blue'}
                        previousClassName={'page-item flex items-center justify-center w-10 h-10 rounded-full'}
                        previousLinkClassName={'page-link w-full h-full flex items-center justify-center hover:bg-gold rounded-full'}
                        nextClassName={'page-item flex items-center justify-center w-10 h-10 rounded-full'}
                        nextLinkClassName={'page-link w-full h-full flex items-center justify-center hover:bg-gold rounded-full'}
                        activeClassName={'bg-gold text-deep-blue'}
                        disabledClassName={'opacity-50 cursor-not-allowed'}
                    />
                </div>

                <motion.h2
                    className="text-4xl font-extrabold text-center my-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Our Founders
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {founders.map((founder, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <img
                                src={founder.image}
                                alt={founder.name}
                                className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-gold"
                            />
                            <h3 className="text-xl font-bold">{founder.name}</h3>
                            <p className="text-warm-gray">{founder.title}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Gallery;