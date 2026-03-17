'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Bot, X, MessageCircleHeart, Send, RotateCcw, Sparkles } from 'lucide-react';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'https://api.divenzainc.com/api/v1';
const SESSION_KEY = 'divenza_chat_session_id';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    text: string;
    streaming?: boolean;
}

function ChatBox({ onClose }: { onClose: () => void }) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isStreaming, setIsStreaming] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const abortRef = useRef<AbortController | null>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    const getSessionId = () => localStorage.getItem(SESSION_KEY);
    const saveSessionId = (id: string) => localStorage.setItem(SESSION_KEY, id);

    const startNewConversation = () => {
        if (isStreaming) {
            abortRef.current?.abort();
        }
        localStorage.removeItem(SESSION_KEY);
        setMessages([]);
        setIsStreaming(false);
        setIsTyping(false);
        inputRef.current?.focus();
    };

    const sendMessage = async () => {
        const text = input.trim();
        if (!text || isStreaming) return;

        const userMsg: Message = { id: crypto.randomUUID(), role: 'user', text };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);
        setIsStreaming(true);

        const assistantId = crypto.randomUUID();

        const abort = new AbortController();
        abortRef.current = abort;

        try {
            const sessionId = getSessionId();
            const response = await fetch(`${BASE_URL}/ai-chat/stream`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ sessionId, message: text }),
                signal: abort.signal,
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            // Check for session id in header immediately
            const headerSession = response.headers.get('X-Session-Id');
            if (headerSession) saveSessionId(headerSession);

            const reader = response.body!.getReader();
            const decoder = new TextDecoder();
            let firstChunk = true;

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const lines = decoder.decode(value, { stream: true }).split('\n');
                for (const line of lines) {
                    if (!line.startsWith('data: ')) continue;
                    const raw = line.slice(6).trim();
                    if (!raw) continue;

                    let data: { text?: string; done?: boolean; sessionId?: string; error?: string };
                    try {
                        data = JSON.parse(raw);
                    } catch {
                        continue;
                    }

                    if (firstChunk) {
                        firstChunk = false;
                        setIsTyping(false);
                        setMessages(prev => [
                            ...prev,
                            { id: assistantId, role: 'assistant', text: '', streaming: true },
                        ]);
                    }

                    if (data.text) {
                        setMessages(prev =>
                            prev.map(m =>
                                m.id === assistantId ? { ...m, text: m.text + data.text } : m
                            )
                        );
                    }

                    if (data.done) {
                        if (data.sessionId) saveSessionId(data.sessionId);
                        setMessages(prev =>
                            prev.map(m =>
                                m.id === assistantId ? { ...m, streaming: false } : m
                            )
                        );
                    }

                    if (data.error) {
                        setMessages(prev =>
                            prev.map(m =>
                                m.id === assistantId
                                    ? { ...m, text: `Error: ${data.error}`, streaming: false }
                                    : m
                            )
                        );
                    }
                }
            }
        } catch (err: unknown) {
            if (err instanceof Error && err.name === 'AbortError') return;
            setIsTyping(false);
            setMessages(prev => {
                const hasAssistant = prev.some(m => m.id === assistantId);
                if (hasAssistant) {
                    return prev.map(m =>
                        m.id === assistantId
                            ? { ...m, text: 'Sorry, something went wrong. Please try again.', streaming: false }
                            : m
                    );
                }
                return [
                    ...prev,
                    {
                        id: assistantId,
                        role: 'assistant',
                        text: 'Sorry, something went wrong. Please try again.',
                    },
                ];
            });
        } finally {
            setIsTyping(false);
            setIsStreaming(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <div className="flex flex-col bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
            style={{ width: '360px', height: '520px' }}>

            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3"
                style={{ background: 'linear-gradient(135deg, #3F3369 0%, #5a4d8a 100%)' }}>
                <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <Sparkles size={16} className="text-white" />
                    </div>
                    <div>
                        <p className="text-white font-semibold text-sm leading-tight">Divenza AI</p>
                        <p className="text-white/70 text-xs">Ask me anything</p>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <button
                        onClick={startNewConversation}
                        title="New conversation"
                        className="w-8 h-8 rounded-full text-white/70 hover:text-white hover:bg-white/20 flex items-center justify-center transition-colors"
                    >
                        <RotateCcw size={15} />
                    </button>
                    <button
                        onClick={onClose}
                        title="Close"
                        className="w-8 h-8 rounded-full text-white/70 hover:text-white hover:bg-white/20 flex items-center justify-center transition-colors"
                    >
                        <X size={15} />
                    </button>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gray-50">
                {messages.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-full text-center gap-3 pb-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center"
                            style={{ background: 'linear-gradient(135deg, #3F3369, #5a4d8a)' }}>
                            <Bot size={24} className="text-white" />
                        </div>
                        <div>
                            <p className="font-semibold text-gray-700 text-sm">Hi! I&apos;m Divenza AI</p>
                            <p className="text-gray-400 text-xs mt-1">How can I help you today?</p>
                        </div>
                    </div>
                )}

                {messages.map(msg => (
                    <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {msg.role === 'assistant' && (
                            <div className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center mr-2 mt-0.5"
                                style={{ background: 'linear-gradient(135deg, #3F3369, #5a4d8a)' }}>
                                <Sparkles size={12} className="text-white" />
                            </div>
                        )}
                        <div
                            className={`max-w-[78%] px-3 py-2 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap wrap-break-word ${
                                msg.role === 'user'
                                    ? 'text-white rounded-br-sm'
                                    : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-sm'
                            }`}
                            style={msg.role === 'user' ? { background: 'linear-gradient(135deg, #3F3369, #5a4d8a)' } : {}}
                        >
                            {msg.text}
                            {msg.streaming && (
                                <span className="inline-block w-1 h-3.5 ml-0.5 align-middle rounded-sm animate-pulse"
                                    style={{ background: '#32A790' }} />
                            )}
                        </div>
                    </div>
                ))}

                {isTyping && (
                    <div className="flex justify-start items-end gap-2">
                        <div className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center"
                            style={{ background: 'linear-gradient(135deg, #3F3369, #5a4d8a)' }}>
                            <Sparkles size={12} className="text-white" />
                        </div>
                        <div className="bg-white px-4 py-2.5 rounded-2xl rounded-bl-sm shadow-sm border border-gray-100 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: '#3F3369', animationDelay: '0ms' }} />
                            <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: '#3F3369', animationDelay: '150ms' }} />
                            <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: '#3F3369', animationDelay: '300ms' }} />
                        </div>
                    </div>
                )}

                <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="px-3 py-3 bg-white border-t border-gray-100">
                <div className="flex items-end gap-2 bg-gray-50 rounded-xl border border-gray-200 px-3 py-2 focus-within:border-indigo-300 transition-colors">
                    <textarea
                        ref={inputRef}
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type a message…"
                        rows={1}
                        disabled={isStreaming}
                        className="flex-1 bg-transparent resize-none outline-none text-sm text-gray-800 placeholder-gray-400 max-h-24 leading-relaxed disabled:opacity-50"
                        style={{ scrollbarWidth: 'none' }}
                    />
                    <button
                        onClick={sendMessage}
                        disabled={!input.trim() || isStreaming}
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105"
                        style={{ background: 'linear-gradient(135deg, #3F3369, #5a4d8a)' }}
                    >
                        <Send size={14} className="text-white" />
                    </button>
                </div>
                <p className="text-center text-gray-300 text-[10px] mt-2">Powered by Divenza AI</p>
            </div>
        </div>
    );
}

export default function FloatingHelp() {
    const [open, setOpen] = useState(false);
    const [chatOpen, setChatOpen] = useState(false);

    const whatsappUrl = 'https://wa.me/94704469834';

    const handleAIClick = () => {
        setChatOpen(true);
        setOpen(false);
    };

    return (
        <>
            {/* Chat box */}
            {chatOpen && (
                <div className="fixed bottom-24 right-6 z-50 animate-in slide-in-from-bottom-4 fade-in duration-200">
                    <ChatBox onClose={() => setChatOpen(false)} />
                </div>
            )}

            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
                {/* Expanded options */}
                {open && (
                    <div className="flex flex-col items-end gap-2 animate-in slide-in-from-bottom-2 fade-in duration-200">
                        {/* AI Assistance */}
                        <div className="flex items-center gap-2">
                            <span className="bg-white text-gray-700 text-sm px-3 py-1.5 rounded-full shadow-md border border-gray-100 whitespace-nowrap">
                                AI Assistant
                            </span>
                            <button
                                onClick={handleAIClick}
                                title="Chat with Divenza AI"
                                className="w-11 h-11 rounded-full bg-indigo-100 text-primary flex items-center justify-center shadow hover:bg-indigo-200 transition-colors cursor-pointer"
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
            </div>
        </>
    );
}
