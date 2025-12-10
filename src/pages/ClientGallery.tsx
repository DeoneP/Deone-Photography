
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Share, Lock } from 'lucide-react';
import { CLIENT_GALLERIES } from '../data/clientGalleries';
import { AnimatePresence, motion } from 'framer-motion';

const ClientGallery: React.FC = () => {
    const { clientId } = useParams<{ clientId: string }>();
    const navigate = useNavigate();
    const [gallery, setGallery] = useState(CLIENT_GALLERIES.find(g => g.id === clientId));
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    useEffect(() => {
        // Check access
        const hasAccess = localStorage.getItem(`gallery_access_${clientId}`);
        const foundGallery = CLIENT_GALLERIES.find(g => g.id === clientId);

        if (!foundGallery) {
            navigate('/client-login'); // Or 404
            return;
        }

        if (!hasAccess) {
            navigate('/client-login');
        }
        setGallery(foundGallery);
    }, [clientId, navigate]);

    if (!gallery) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

    return (
        <div className="bg-white min-h-screen pb-24">
            {/* Gallery Header */}
            <div className="relative h-[60vh] flex items-center justify-center">
                <img src={gallery.coverImage} alt={gallery.name} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 text-center text-white">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] mb-4 block opacity-80">Private Gallery</span>
                    <h1 className="text-5xl md:text-7xl font-heading mb-6">{gallery.name}</h1>
                    <button className="px-8 py-3 bg-white text-[#1a3a32] text-xs font-bold uppercase tracking-widest hover:bg-[#cba668] transition-colors rounded-sm">
                        Download All
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex justify-between items-center mb-12 border-b border-[#1a3a32]/10 pb-6">
                    <button onClick={() => navigate('/client-login')} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1a3a32]/60 hover:text-[#1a3a32] transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Exit Gallery
                    </button>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1a3a32] hover:text-[#cba668] transition-colors">
                            <Share className="w-4 h-4" /> Share
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {gallery.images.map((img, idx) => (
                        <div
                            key={idx}
                            className="aspect-[3/4] bg-[#eae6db] overflow-hidden cursor-pointer group relative"
                            onClick={() => setLightboxIndex(idx)}
                        >
                            <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <span className="bg-white/90 text-[#1a3a32] px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-sm backdrop-blur-sm">View</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z[70] bg-black/95 flex items-center justify-center"
                        onClick={() => setLightboxIndex(null)}
                    >
                        <div className="absolute top-4 right-4 text-white hover:text-[#cba668] cursor-pointer" onClick={() => setLightboxIndex(null)}>
                            Close [X]
                        </div>
                        <img
                            src={gallery.images[lightboxIndex]}
                            className="max-h-[90vh] max-w-[95vw] object-contain shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ClientGallery;
