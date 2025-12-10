import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Image as ImageIcon, Sparkles } from 'lucide-react';
import { Gallery } from '../types/gallery';
import { galleryService } from '../services/galleryService';

const AdminDashboard: React.FC = () => {
    const [galleries, setGalleries] = useState<Gallery[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadGalleries();
    }, []);

    const loadGalleries = async () => {
        try {
            const data = await galleryService.getGalleries();
            setGalleries(data);
        } catch (error) {
            console.error('Failed to load galleries', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-7xl mx-auto px-6 py-20"
        >
            <div className="flex justify-between items-center mb-12">
                <div>
                    <h1 className="font-heading text-4xl text-[#1a3a32] mb-2">Admin Dashboard</h1>
                    <p className="text-[#8da399]">Manage client galleries and social media content.</p>
                </div>
                <button className="flex items-center gap-2 bg-[#1a3a32] text-[#f4f1ea] px-6 py-3 text-sm font-bold uppercase tracking-widest hover:bg-[#cba668] hover:text-[#1a3a32] transition-colors">
                    <Upload className="w-4 h-4" />
                    New Gallery
                </button>
            </div>

            {loading ? (
                <div className="text-center py-20 text-[#8da399]">Loading galleries...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Gallery Cards */}
                    {galleries.map((gallery) => (
                        <div key={gallery.id} className="bg-white p-6 border border-[#1a3a32]/10 group hover:border-[#cba668] transition-colors">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="font-heading text-xl text-[#1a3a32]">{gallery.clientName}</h3>
                                <span className={`text-xs font-bold uppercase tracking-widest px-2 py-1 ${gallery.status === 'published' ? 'bg-[#1a3a32]/10 text-[#1a3a32]' : 'bg-gray-100 text-gray-500'
                                    }`}>
                                    {gallery.status}
                                </span>
                            </div>

                            <div className="aspect-[3/2] bg-gray-100 mb-4 overflow-hidden relative">
                                {gallery.coverImage ? (
                                    <img
                                        src={gallery.coverImage}
                                        alt={gallery.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                                        <ImageIcon className="w-8 h-8" />
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col gap-2">
                                <h4 className="font-bold text-[#1a3a32]">{gallery.title}</h4>
                                <p className="text-sm text-[#8da399] tracking-wider mb-4">{new Date(gallery.date).toLocaleDateString()}</p>

                                <div className="grid grid-cols-2 gap-2 mt-auto">
                                    <button className="flex items-center justify-center gap-2 border border-[#1a3a32]/20 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-[#1a3a32] hover:text-[#f4f1ea] transition-colors">
                                        Manage
                                    </button>
                                    <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-900 border border-purple-200 py-2.5 text-xs font-bold uppercase tracking-widest hover:from-purple-500/20 hover:to-blue-500/20 transition-all">
                                        <Sparkles className="w-3 h-3" />
                                        AI Tools
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </motion.div>
    );
};

export default AdminDashboard;
