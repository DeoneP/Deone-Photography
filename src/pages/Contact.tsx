import React, { useState, useEffect } from 'react';
import { CONTENT } from '../data/content';
import AvailabilityCalendar from '../components/AvailabilityCalendar';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        type: 'Family Session',
        date: '',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    // Initialize EmailJS (optional but good practice)
    useEffect(() => {
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        if (publicKey) emailjs.init(publicKey);
    }, []);

    const handleDateSelect = (date: string) => {
        setFormData({
            ...formData,
            date: date
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            type: formData.type,
            date: formData.date || 'Not selected',
            message: formData.message,
            to_name: 'Deone'
        };

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setStatus('success');
            setFormData({
                name: '',
                email: '',
                type: 'Family Session',
                date: '',
                message: ''
            });
            // Reset success message after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error: any) {
            console.error('EmailJS Error Object:', error);
            if (error.text) console.error('EmailJS Error Text:', error.text);
            setStatus('error');
            // Reset error after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto min-h-[80vh] flex flex-col justify-center">
            <div className="text-center mb-16">
                <span className="text-[#cba668] text-sm uppercase tracking-widest font-bold mb-2 block">Get In Touch</span>
                <h2 className="text-4xl md:text-6xl font-heading text-[#1a3a32] mb-6">{CONTENT.contact.title}</h2>
                <p className="text-xl text-[#1a3a32]/70 max-w-2xl mx-auto">
                    {CONTENT.contact.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Calendar Section */}
                <div className="space-y-6">
                    <div className="text-center lg:text-left mb-6">
                        <h3 className="text-2xl font-heading text-[#1a3a32] mb-2">Check Availability</h3>
                        <p className="text-[#1a3a32]/70 text-sm">See open dates before you enquire. Click a date to select it.</p>
                    </div>
                    <AvailabilityCalendar onDateSelect={handleDateSelect} />
                </div>

                {/* Form Section */}
                <div className="bg-white p-8 md:p-12 shadow-xl border border-[#1a3a32]/5 rounded-sm text-left">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-[#1a3a32]/60">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-[#f4f1ea] border-b border-[#1a3a32]/20 p-3 focus:outline-none focus:border-[#cba668] transition-colors"
                                    placeholder="Your Name"
                                    required
                                    disabled={status === 'sending'}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-[#1a3a32]/60">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-[#f4f1ea] border-b border-[#1a3a32]/20 p-3 focus:outline-none focus:border-[#cba668] transition-colors"
                                    placeholder="hello@example.com"
                                    required
                                    disabled={status === 'sending'}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-[#1a3a32]/60">Type of Shoot</label>
                                <select
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    className="w-full bg-[#f4f1ea] border-b border-[#1a3a32]/20 p-3 focus:outline-none focus:border-[#cba668] transition-colors text-[#1a3a32]"
                                    disabled={status === 'sending'}
                                >
                                    <option>Family Session</option>
                                    <option>Graduation</option>
                                    <option>Portrait / Headshots</option>
                                    <option>Couples / Engagement</option>
                                    <option>Wedding</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-[#1a3a32]/60">Preferred Date</label>
                                <input
                                    type="text"
                                    name="date"
                                    value={formData.date}
                                    readOnly
                                    className="w-full bg-[#f4f1ea] border-b border-[#1a3a32]/20 p-3 focus:outline-none focus:border-[#cba668] transition-colors cursor-pointer"
                                    placeholder="Select from calendar"
                                    disabled={status === 'sending'}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-[#1a3a32]/60">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full bg-[#f4f1ea] border-b border-[#1a3a32]/20 p-3 focus:outline-none focus:border-[#cba668] transition-colors"
                                placeholder="Tell me about your vision..."
                                required
                                disabled={status === 'sending'}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className={`w-full py-4 font-bold uppercase tracking-widest transition-colors duration-300 ${status === 'sending'
                                ? 'bg-[#1a3a32]/50 text-white cursor-wait'
                                : 'bg-[#1a3a32] text-white hover:bg-[#cba668] hover:text-[#1a3a32]'
                                }`}
                        >
                            {status === 'sending' ? 'Sending...' : 'Send Inquiry'}
                        </button>

                        {status === 'success' && (
                            <div className="p-4 bg-green-50 text-green-800 text-sm text-center rounded-sm border border-green-200">
                                Message sent successfully! I'll get back to you soon.
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="p-4 bg-red-50 text-red-800 text-sm text-center rounded-sm border border-red-200">
                                Something went wrong. Please try again or email me directly at <a href="mailto:deone.photography1@gmail.com" className="underline">deone.photography1@gmail.com</a>.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
