
import React from 'react';
import { Camera, Heart, Instagram } from 'lucide-react';
import { CONTENT } from '../data/content';

const About: React.FC = () => {
    return (
        <div className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <div className="aspect-[3/4] bg-[#eae6db] overflow-hidden">
                        <img
                            src="https://i.postimg.cc/k5q3NLcf/Lifestyle-361.jpg"
                            alt="Deone"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                    {/* Decorative Frame */}
                    <div className="absolute -bottom-6 -right-6 w-full h-full border border-[#1a3a32] -z-10" />
                </div>

                <div>
                    <span className="text-[#cba668] text-sm uppercase tracking-widest font-bold mb-2 block">About The Photographer</span>
                    <h2 className="text-4xl md:text-5xl font-heading text-[#1a3a32] mb-8">{CONTENT.about.title}</h2>
                    <div className="space-y-6 text-[#1a3a32]/80 leading-relaxed font-light">
                        {CONTENT.about.paragraphs.map((p, idx) => (
                            <p key={idx}>{p}</p>
                        ))}
                    </div>

                    <div className="mt-10 flex gap-8">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2 text-[#cba668]">
                                <Camera className="w-5 h-5" />
                                <span className="font-bold text-xl">{CONTENT.about.experienceYears}</span>
                            </div>
                            <span className="text-xs uppercase tracking-widest text-[#1a3a32]/60">Years Experience</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2 text-[#cba668]">
                                <Heart className="w-5 h-5" />
                                <span className="font-bold text-xl">{CONTENT.about.happyClients}</span>
                            </div>
                            <span className="text-xs uppercase tracking-widest text-[#1a3a32]/60">Happy Clients</span>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-[#1a3a32]/10">
                        <p className="text-sm text-[#1a3a32]/60 italic mb-4">"Photography is the story I fail to put into words."</p>
                        <a href="https://www.instagram.com/deone_photography/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#1a3a32] font-bold uppercase text-xs tracking-widest hover:text-[#cba668] transition-colors">
                            <Instagram className="w-4 h-4" /> Follow my journey
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
