
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import RevealText from '../components/GlitchText'; // Ensure path is correct, might need updating
import { ArrowRight } from 'lucide-react';
import { CONTENT } from '../data/content';

const Home: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -20]);
    const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <>
            {/* Hero Section */}
            <section id="hero" className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden px-4">
                <div className="absolute inset-0 z-0 opacity-20">
                    {/* Use one of the high quality images as a subtle hero background */}
                    <img
                        src="https://i.postimg.cc/MG2ZCsYX/a7bb8ba2-03fa-4c66-8f50-2299f6b11ed9.jpg"
                        className="w-full h-full object-cover"
                        alt="Hero Background"
                    />
                    <div className="absolute inset-0 bg-[#f4f1ea]/60 backdrop-blur-[2px]"></div>
                </div>

                <motion.div style={{ y: headerY, opacity: headerOpacity }} className="text-center z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
                    <div className="flex flex-col items-center">
                        <RevealText text={CONTENT.hero.line1} as="h1" className="text-5xl md:text-8xl font-heading font-medium text-[#1a3a32] leading-tight" />
                        <RevealText text={CONTENT.hero.line2} as="h1" className="text-5xl md:text-8xl font-heading font-medium italic text-[#cba668] leading-tight" delay={0.2} />
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-lg md:text-xl font-light text-[#1a3a32]/80 max-w-lg leading-relaxed mt-4 drop-shadow-sm"
                    >
                        {CONTENT.hero.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="mt-8 flex gap-4"
                    >
                        <Link
                            to="/portfolio"
                            className="px-8 py-3 bg-[#1a3a32] text-white text-sm tracking-widest hover:bg-[#122923] transition-colors rounded-sm shadow-lg flex items-center justify-center"
                        >
                            VIEW WORK
                        </Link>
                        <Link
                            to="/contact"
                            className="px-8 py-3 border border-[#1a3a32] text-[#1a3a32] text-sm tracking-widest hover:bg-[#1a3a32] hover:text-white transition-colors rounded-sm flex items-center justify-center"
                        >
                            CONTACT
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* Featured Preview (Simple CTA for Portfolio) */}
            <section className="py-24 px-6 text-center bg-white">
                <h2 className="text-3xl font-heading text-[#1a3a32] mb-6">Stories Told Beautifully</h2>
                <p className="max-w-2xl mx-auto text-[#1a3a32]/70 mb-10 leading-relaxed">
                    From the quiet intimacy of a newborn shoot to the joyous celebration of a wedding day,
                    every gallery is a collection of moments you'll cherish forever.
                </p>
                <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 px-8 py-3 border border-[#1a3a32]/20 text-[#1a3a32] text-sm tracking-widest hover:bg-[#1a3a32] hover:text-[#f4f1ea] transition-all duration-300 rounded-sm"
                >
                    EXPLORE THE PORTFOLIO <ArrowRight className="w-4 h-4" />
                </Link>
            </section>
        </>
    );
};

export default Home;
