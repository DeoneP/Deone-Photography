
import React from 'react';
import { PACKAGES } from '../data/portfolioData';
import { Link } from 'react-router-dom';
import { Check, Calendar, Camera, Heart, Download } from 'lucide-react';
import { CONTENT } from '../data/content';

const Investment: React.FC = () => {
    const steps = [
        {
            icon: <Calendar className="w-8 h-8" />,
            title: "1. Book Your Date",
            desc: "Secure your session with a deposit. We'll discuss locations and outfits to match your vision."
        },
        {
            icon: <Camera className="w-8 h-8" />,
            title: "2. The Session",
            desc: "Relax and enjoy. I'll guide you through natural poses and capture the candid moments in between."
        },
        {
            icon: <Download className="w-8 h-8" />,
            title: "3. Receive Gallery",
            desc: "Within 2-3 weeks, you'll receive a password-protected online gallery to download your high-res images."
        }
    ];

    return (
        <div className="pb-24">
            {/* Header */}
            <section className="bg-[#1a3a32] text-[#f4f1ea] py-24 px-6 text-center mb-16">
                <div className="max-w-2xl mx-auto">
                    <span className="text-[#cba668] text-sm uppercase tracking-widest font-bold mb-2 block">Investment</span>
                    <h1 className="text-4xl md:text-5xl font-heading mb-6">{CONTENT.investment.title}</h1>
                    <p className="text-[#f4f1ea]/70 text-lg font-light">{CONTENT.investment.subtitle}</p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {PACKAGES.map((pkg, idx) => (
                        <div
                            key={idx}
                            className={`p-8 border ${pkg.recommended
                                ? 'border-[#cba668] bg-white shadow-xl scale-105 z-10 relative'
                                : 'border-[#1a3a32]/10 bg-[#eae6db]/50'
                                } rounded-sm transition-transform hover:-translate-y-1`}
                        >
                            {pkg.recommended && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#cba668] text-[#1a3a32] text-xs font-bold px-4 py-1 uppercase tracking-widest rounded-full">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="font-heading text-2xl text-[#1a3a32] mb-2">{pkg.name}</h3>
                            <div className="text-3xl font-bold text-[#1a3a32] mb-4">{pkg.price}</div>
                            <p className="text-[#1a3a32]/70 text-sm mb-6">{pkg.description}</p>

                            <ul className="space-y-4 mb-8">
                                {pkg.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-center gap-3 text-sm text-[#1a3a32]/80">
                                        <Check className="w-4 h-4 text-[#cba668]" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to="/contact"
                                className={`w-full py-3 text-sm font-bold uppercase tracking-widest transition-colors block text-center ${pkg.recommended
                                    ? 'bg-[#1a3a32] text-white hover:bg-[#cba668] hover:text-[#1a3a32]'
                                    : 'border border-[#1a3a32] text-[#1a3a32] hover:bg-[#1a3a32] hover:text-white'
                                    }`}
                            >
                                Choose {pkg.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Terms & Conditions */}
            <section className="px-6 md:px-12 max-w-4xl mx-auto mb-24">
                <div className="bg-[#f4f1ea] p-8 md:p-12 border border-[#1a3a32]/10 rounded-sm">
                    <h2 className="text-3xl font-heading text-[#1a3a32] mb-8 text-center">Terms & Conditions</h2>
                    <div className="space-y-4 text-[#1a3a32]/80 text-sm leading-relaxed">
                        <ul className="list-disc pl-5 space-y-2">
                            <li>A <strong>50% deposit</strong> is required to confirm your booking. The rest is to be paid within the week after the event/shoot.</li>
                            <li>The deposit is <strong>NON-REFUNDABLE</strong> with regards to cancellation.</li>
                            <li>The POP must be sent to <a href="mailto:deone.photography1@gmail.com" className="underline hover:text-[#cba668]">deone.photography1@gmail.com</a>.</li>
                            <li>The <strong>first 10km</strong> of traveling cost is included. After that, <strong>R5 per km</strong> is charged automatically.</li>
                            <li>It is the responsibility of the client to book the venues themselves.</li>
                            <li>Deone Photography retains copyright to all the photos and may use them for promotional reasons.</li>
                            <li>A lot of care and attention goes into the final edits of photos and are a key part of Deone Photography style. Immense gratitude will be appreciated if the photos are shared as they were delivered. If there are specific things you’d want to change/tweak, please don't hesitate to reach out, as reasonable adjustments will happily be made.</li>
                            <li>I would love to see your photos! Please remember to tag <a href="https://www.instagram.com/deone_photography/" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-[#cba668]">@deone_photography</a> in social media posts or tag my profile so that I can repost your photo.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* How it Works */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-heading text-[#1a3a32] mb-4">How It Works</h2>
                    <div className="w-24 h-px bg-[#cba668] mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-[#1a3a32]/10 -z-10"></div>

                    {steps.map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center bg-[#f4f1ea] p-4">
                            <div className="w-24 h-24 rounded-full bg-white border border-[#1a3a32]/10 flex items-center justify-center text-[#cba668] mb-6 shadow-sm">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-heading text-[#1a3a32] mb-3">{step.title}</h3>
                            <p className="text-[#1a3a32]/70 text-sm leading-relaxed max-w-xs">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* What You Get Section */}
            <section className="mt-24 py-16 bg-white px-6 md:px-12">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <img src="https://i.postimg.cc/k5q3NLcf/Lifestyle-361.jpg" alt="Deliverables" className="w-full h-auto rounded-sm shadow-xl" />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-3xl font-heading text-[#1a3a32] mb-6">What You Get</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="bg-[#1a3a32]/5 p-3 h-fit rounded-full"><Heart className="w-6 h-6 text-[#cba668]" /></div>
                                <div>
                                    <h4 className="font-bold text-[#1a3a32] mb-1">High-Resolution Images</h4>
                                    <p className="text-sm text-[#1a3a32]/70">Crystal clear photos perfect for large prints and wall art.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-[#1a3a32]/5 p-3 h-fit rounded-full"><Download className="w-6 h-6 text-[#cba668]" /></div>
                                <div>
                                    <h4 className="font-bold text-[#1a3a32] mb-1">Online Gallery</h4>
                                    <p className="text-sm text-[#1a3a32]/70">A beautiful, private gallery to share with friends and family worldwide.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-[#1a3a32]/5 p-3 h-fit rounded-full"><Check className="w-6 h-6 text-[#cba668]" /></div>
                                <div>
                                    <h4 className="font-bold text-[#1a3a32] mb-1">Print Rights</h4>
                                    <p className="text-sm text-[#1a3a32]/70">You own your photos. Print them wherever and whenever you like.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Investment;
