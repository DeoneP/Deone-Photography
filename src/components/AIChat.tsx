/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I\'m Deone\'s assistant. How can I help you plan your shoot today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      const { scrollHeight, clientHeight } = chatContainerRef.current;
      chatContainerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    setTimeout(scrollToBottom, 100);

    const responseText = await sendMessageToGemini(input);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex flex-col items-end pointer-events-auto">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[90vw] md:w-80 bg-white shadow-2xl rounded-sm border border-[#1a3a32]/10 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#1a3a32] p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#cba668] rounded-full flex items-center justify-center">
                  <Camera className="w-4 h-4 text-[#1a3a32]" />
                </div>
                <div>
                  <h3 className="font-heading font-medium text-[#f4f1ea] text-sm tracking-wide">Deone Assistant</h3>
                  <p className="text-[10px] text-[#8da399]">Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-[#8da399] hover:text-[#f4f1ea] transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={chatContainerRef}
              className="h-64 md:h-80 overflow-y-auto p-4 space-y-4 bg-[#f4f1ea] scroll-smooth"
            >
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 text-sm leading-relaxed ${msg.role === 'user'
                      ? 'bg-[#1a3a32] text-[#f4f1ea] rounded-t-lg rounded-bl-lg'
                      : 'bg-white text-[#1a3a32] shadow-sm rounded-t-lg rounded-br-lg border border-[#1a3a32]/5'
                      }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-lg shadow-sm border border-[#1a3a32]/5 flex gap-1">
                    <span className="w-1 h-1 bg-[#8da399] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1 h-1 bg-[#8da399] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1 h-1 bg-[#8da399] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-[#1a3a32]/5 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="Ask about prices or booking..."
                  className="flex-1 bg-[#f4f1ea] text-[#1a3a32] placeholder-[#8da399] text-sm px-3 py-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#cba668]/50"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="bg-[#cba668] p-2 rounded-sm hover:bg-[#b08d4b] transition-colors disabled:opacity-50 text-[#1a3a32]"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#1a3a32] flex items-center justify-center shadow-lg shadow-[#1a3a32]/20 z-50 group border border-[#f4f1ea]/10"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-[#f4f1ea]" />
        ) : (
          <MessageCircle className="w-6 h-6 text-[#f4f1ea] group-hover:scale-110 transition-transform" />
        )}
      </motion.button>
    </div>
  );
};

export default AIChat;