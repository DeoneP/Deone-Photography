
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, ArrowRight } from 'lucide-react';
import { CLIENT_GALLERIES } from '../data/clientGalleries';

const ClientLogin: React.FC = () => {
    const [galleryId, setGalleryId] = useState('');
    const [pin, setPin] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        const gallery = CLIENT_GALLERIES.find(g => g.id === galleryId.toLowerCase() && g.pin === pin);

        if (gallery) {
            // In a real app, we'd set a session token. 
            // For this static demo, just navigate with state or URL param logic.
            // We'll trust the user has the PIN for now (simple security).
            localStorage.setItem(`gallery_access_${gallery.id}`, 'true');
            navigate(`/gallery/${gallery.id}`);
        } else {
            setError('Invalid Gallery ID or PIN. Please try again.');
        }
    };

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-6">
            <div className="max-w-md w-full bg-white p-8 md:p-12 shadow-2xl border border-[#1a3a32]/10 text-center">
                <div className="w-16 h-16 bg-[#1a3a32]/5 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Lock className="w-8 h-8 text-[#cba668]" />
                </div>
                <h1 className="text-3xl font-heading text-[#1a3a32] mb-2">Client Access</h1>
                <p className="text-[#1a3a32]/60 text-sm mb-8">Please enter your specialized login details to access your private gallery.</p>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="text-left">
                        <label className="text-xs font-bold uppercase tracking-widest text-[#1a3a32]/60 block mb-1">Gallery ID</label>
                        <input
                            type="text"
                            value={galleryId}
                            onChange={(e) => setGalleryId(e.target.value)}
                            className="w-full bg-[#f4f1ea] border-b border-[#1a3a32]/20 p-3 focus:outline-none focus:border-[#cba668] transition-colors"
                            placeholder="e.g. smith-family"
                        />
                    </div>
                    <div className="text-left">
                        <label className="text-xs font-bold uppercase tracking-widest text-[#1a3a32]/60 block mb-1">PIN Code</label>
                        <input
                            type="password"
                            value={pin}
                            onChange={(e) => setPin(e.target.value)}
                            className="w-full bg-[#f4f1ea] border-b border-[#1a3a32]/20 p-3 focus:outline-none focus:border-[#cba668] transition-colors"
                            placeholder="****"
                        />
                    </div>

                    {error && <p className="text-red-500 text-xs mt-2">{error}</p>}

                    <button type="submit" className="w-full bg-[#1a3a32] text-white py-4 font-bold uppercase tracking-widest hover:bg-[#cba668] hover:text-[#1a3a32] transition-colors duration-300 mt-4 flex items-center justify-center gap-2">
                        Access Gallery <ArrowRight className="w-4 h-4" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ClientLogin;
