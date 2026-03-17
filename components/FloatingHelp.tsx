'use client';

import { useState } from 'react';
import { MessageCircle, Bot, X, MessageCircleHeart } from 'lucide-react';

export default function FloatingHelp() {
    const [open, setOpen] = useState(false);

    const whatsappUrl = 'https://wa.me/94704469834';

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            {/* Expanded options */}
            {open && (
                <div className="flex flex-col items-end gap-2 animate-in slide-in-from-bottom-2 fade-in duration-200">
                    {/* AI Assistance - coming soon */}
                    <div className="flex items-center gap-2">
                        <span className="bg-white text-gray-700 text-sm px-3 py-1.5 rounded-full shadow-md border border-gray-100 whitespace-nowrap">
                            AI Assistant <span className="text-xs text-indigo-500 font-medium">— Coming Soon!</span>
                        </span>
                        <button
                            disabled
                            title="AI Assistance — Coming Soon"
                            className="w-11 h-11 rounded-full bg-indigo-100 text-primary flex items-center justify-center shadow cursor-not-allowed"
                        >
                            <Bot size={20} />
                        </button>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-center gap-2">
                        <span className="bg-white text-gray-700 text-sm px-3 py-1.5 rounded-full shadow-md border border-gray-100 whitespace-nowrap">
                            Chat on WhatsApp
                        </span>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Chat with us on WhatsApp"
                            className="w-11 h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md hover:bg-[#1ebe5d] transition-colors"
                        >
                            <MessageCircle size={20} />
                        </a>
                    </div>
                </div>
            )}

            {/* Toggle button */}
            <button
                onClick={() => setOpen(!open)}
                title={open ? 'Close' : 'Need Help?'}
                className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-secondary transition-all duration-200 cursor-pointer"
                style={{ width: '50px', height: '50px' }}
            >
                {open ? <X size={20} /> : <MessageCircleHeart size={25} />}
            </button>

            {/* Subtle label when closed */}
            {/* {!open && (
                <span className="text-xs text-primary -mt-2 mr-1 select-none font-medium">Need Help?</span>
            )} */}
        </div>
    );
}
