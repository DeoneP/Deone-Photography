
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, ChevronLeft, ArrowRight, X } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { Category, PortfolioItem } from '../types';
import PortfolioImage from '../components/ArtistCard'; // Make sure this path is correct

const Portfolio: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
    const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);
    const [lightboxImage, setLightboxImage] = useState<PortfolioItem | null>(null);

    const categories = ['All', 'Family', 'Portrait', 'Graduation', 'Couples', 'Wedding', 'Lifestyle'];

    // Filter items logic
    const filteredItems = useMemo(() => {
        let items = activeCategory === 'All'
            ? PORTFOLIO_ITEMS
            : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

        // If an album is selected, only show items from that album
        if (selectedAlbum) {
            items = items.filter(item => item.album === selectedAlbum);
        }

        return items;
    }, [activeCategory, selectedAlbum]);

    // Logic to get albums for current category
    const categoryAlbums = useMemo(() => {
        if (activeCategory === 'All') return [];

        const albums = new Set<string>();
        PORTFOLIO_ITEMS
            .filter(item => item.category === activeCategory && item.album)
            .forEach(item => albums.add(item.album!));

        return Array.from(albums);
    }, [activeCategory]);

    const handleCategoryChange = (cat: Category | 'All') => {
        setActiveCategory(cat);
        setSelectedAlbum(null);
    };

    return (
        <div className="py-12 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div>
                    <span className="text-[#cba668] text-sm uppercase tracking-widest font-bold mb-2 block">Selected Works</span>
                    <h2 className="text-4xl md:text-5xl font-heading text-[#1a3a32]">The Gallery</h2>
                </div>

                <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryChange(cat as Category | 'All')}
                            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-300 ${activeCategory === cat
                                    ? 'bg-[#1a3a32] text-[#f4f1ea]'
                                    : 'bg-[#1a3a32]/5 text-[#1a3a32] hover:bg-[#1a3a32]/10'
                                }`}
                        >
                            {cat === 'Portrait' ? 'Portraits' : cat === 'Graduation' ? 'Graduations' : cat === 'Wedding' ? 'Weddings' : cat}
                        </button>
                    ))}
                </div>
            </div>

            <motion.div layout>
                {/* FOLDER VIEW: If any category is selected (except All) and no album is open */}
                {activeCategory !== 'All' && !selectedAlbum ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categoryAlbums.map(albumName => {
                            // Find cover image (first image in album)
                            const coverItem = PORTFOLIO_ITEMS.find(i => i.album === albumName);
                            return (
                                <motion.div
                                    key={albumName}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="group cursor-pointer"
                                    onClick={() => setSelectedAlbum(albumName)}
                                >
                                    <div className="relative aspect-[4/3] bg-[#eae6db] overflow-hidden rounded-sm mb-4 border border-[#1a3a32]/10">
                                        {/* Folder Tab Effect */}
                                        <div className="absolute top-0 left-0 w-24 h-8 bg-[#1a3a32]/5 rounded-br-lg z-10"></div>

                                        {coverItem && (
                                            <img
                                                src={coverItem.image}
                                                alt={albumName}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-[#1a3a32]/10 group-hover:bg-[#1a3a32]/0 transition-colors"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Folder className="w-12 h-12 text-[#f4f1ea] drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-heading text-[#1a3a32] group-hover:text-[#cba668] transition-colors">{albumName}</h3>
                                    <p className="text-xs uppercase tracking-widest text-[#1a3a32]/60">
                                        {PORTFOLIO_ITEMS.filter(i => i.album === albumName).length} Photos
                                    </p>
                                </motion.div>
                            )
                        })}
                    </div>
                ) : (
                    <>
                        {/* Back Button for Albums */}
                        {selectedAlbum && (
                            <button
                                onClick={() => setSelectedAlbum(null)}
                                className="mb-8 flex items-center gap-2 text-sm uppercase tracking-widest text-[#1a3a32] hover:text-[#cba668] transition-colors"
                            >
                                <ChevronLeft className="w-4 h-4" /> Back to Albums
                            </button>
                        )}

                        {/* Grid View */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <AnimatePresence>
                                {filteredItems.map((item) => (
                                    <PortfolioImage
                                        key={item.id}
                                        item={item}
                                        onClick={() => setLightboxImage(item)}
                                    />
                                ))}
                            </AnimatePresence>
                        </div>
                    </>
                )}
            </motion.div>

            {/* View Client Gallery Link - keeping purely as an extra external link for now if they have old galleries */}
            <div className="mt-16 text-center">
                <a
                    href="https://postimg.cc/gallery/KT5Df56"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-[#1a3a32]/20 text-[#1a3a32] text-sm tracking-widest hover:bg-[#1a3a32] hover:text-[#f4f1ea] transition-all duration-300 rounded-sm"
                >
                    VIEW FULL SOURCE GALLERY (Old) <ArrowRight className="w-4 h-4" />
                </a>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {lightboxImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-[#1a3a32]/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
                        onClick={() => setLightboxImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 md:top-8 md:right-8 text-[#f4f1ea] hover:text-[#cba668] transition-colors z-10"
                            onClick={() => setLightboxImage(null)}
                        >
                            <X className="w-10 h-10" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-full max-h-full flex flex-col items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={lightboxImage.image}
                                alt={lightboxImage.title}
                                className="w-auto h-auto max-h-[90vh] max-w-[95vw] object-contain shadow-2xl rounded-sm"
                            />
                            <div className="mt-6 text-center">
                                <h3 className="text-2xl font-heading text-[#f4f1ea]">{lightboxImage.title}</h3>
                                <span className="text-[#cba668] text-sm uppercase tracking-widest">{lightboxImage.category}</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Portfolio;
