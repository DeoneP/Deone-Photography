
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Mail } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const isCurrent = (path: string) => location.pathname === path;

    const closeMenu = () => setMobileMenuOpen(false);

    return (
        <div className="relative min-h-screen cursor-default bg-[#f4f1ea] text-[#1a3a32] flex flex-col">
            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12 py-6 bg-[#f4f1ea]/80 backdrop-blur-md border-b border-[#1a3a32]/5">
                <Link to="/" className="font-heading text-xl md:text-2xl font-bold tracking-tight text-[#1a3a32] z-50">
                    Deone<span className="font-light italic text-[#cba668] ml-1">Photography</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-12 text-sm font-medium tracking-wide uppercase text-[#1a3a32]/80">
                    {['Portfolio', 'Investment', 'About'].map((item) => (
                        <Link
                            key={item}
                            to={`/${item.toLowerCase()}`}
                            className={`hover:text-[#cba668] transition-colors relative group ${isCurrent(`/${item.toLowerCase()}`) ? 'text-[#cba668]' : ''}`}
                        >
                            {item}
                            <span className={`absolute -bottom-1 left-0 h-px bg-[#cba668] transition-all duration-300 ${isCurrent(`/${item.toLowerCase()}`) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                        </Link>
                    ))}
                    <Link
                        to="/client-login"
                        className={`hover:text-[#cba668] transition-colors relative group ${isCurrent('/client-login') ? 'text-[#cba668]' : ''}`}
                    >
                        Client Access
                    </Link>
                </div>

                <div className="hidden md:flex">
                    <Link
                        to="/contact"
                        className="px-6 py-2 bg-[#1a3a32] text-[#f4f1ea] text-xs font-bold uppercase tracking-widest hover:bg-[#cba668] hover:text-[#1a3a32] transition-colors duration-300"
                    >
                        Inquire Now
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden z-50 p-2 text-[#1a3a32]"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-30 bg-[#f4f1ea] flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {['Home', 'Portfolio', 'Investment', 'About', 'Contact', 'Client Access'].map((item) => {
                            const path = item === 'Home' ? '/' : item === 'Client Access' ? '/client-login' : `/${item.toLowerCase()}`;
                            return (
                                <Link
                                    key={item}
                                    to={path}
                                    onClick={closeMenu}
                                    className="font-heading text-4xl text-[#1a3a32] hover:text-[#cba668] transition-colors"
                                >
                                    {item}
                                </Link>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="flex-grow pt-20">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-[#1a3a32] text-[#f4f1ea] py-16 px-6 border-t border-[#f4f1ea]/10 mt-auto">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="font-heading text-2xl mb-2">Deone Photography</h3>
                        <p className="text-[#8da399] text-sm">Capturing life's quiet moments in Pretoria.</p>
                    </div>

                    <div className="flex gap-6">
                        <a href="https://www.instagram.com/deone_photography/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#f4f1ea]/10 flex items-center justify-center hover:bg-[#cba668] hover:text-[#1a3a32] transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="mailto:hello@deonephotography.com" className="w-10 h-10 rounded-full bg-[#f4f1ea]/10 flex items-center justify-center hover:bg-[#cba668] hover:text-[#1a3a32] transition-colors">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#f4f1ea]/10 text-center text-xs text-[#8da399] tracking-widest">
                    &copy; {new Date().getFullYear()} Deone Photography. All Rights Reserved.
                </div>
            </footer>
        </div>
    );
};

export default Layout;
