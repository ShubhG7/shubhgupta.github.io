"use client";

import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/navigation';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm ShubhGPT 🤖 I can answer questions about Shubh's background, experience, projects, and skills. What would you like to know?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when loading completes
  useEffect(() => {
    if (!isLoading && inputRef.current) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const messageToSend = inputMessage.trim();
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageToSend,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: messageToSend }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I'm having trouble connecting right now. Please try again later!",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      e.stopPropagation();
      sendMessage();
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    sendMessage();
    return false;
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-[86px] right-6 z-[10003] p-4 rounded-full border-2 shadow-xl transition-all duration-700 ease-in-out touch-manipulation transform hover:scale-110 active:scale-95 flex items-center justify-center ${
          isOpen 
            ? 'bg-gradient-to-br from-[#e2c9a0] to-[#d4b895] border-[#8b5f3f] shadow-2xl scale-110 rotate-45' 
            : 'bg-gradient-to-br from-[#f5e9da] to-[#e2c9a0] border-[#a47551] hover:from-[#e2c9a0] hover:to-[#d4b895] hover:border-[#8b5f3f]'
        }`}
        style={{ fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}
      >
        <div className="w-5 h-5 relative flex items-center justify-center">
          {isOpen ? (
            <span className="text-[#2d1e13] text-2xl font-bold leading-none">×</span>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#2d1e13" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-[148px] right-6 z-[10001] w-96 h-[500px] bg-white rounded-2xl shadow-2xl border-2 border-[#e2c9a0] flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#4b2e13] to-[#a47551] text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <h3 className="font-bold text-lg" style={{ fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
                  ShubhGPT
                </h3>
                <p className="text-sm opacity-90">Ask me about Shubh!</p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs">Online</span>
            </div>
          </div>

          {/* Messages */}
          <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#faf7f2]">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl transition-all duration-300 ease-out ${
                    message.isUser
                      ? 'bg-[#4b2e13] text-white rounded-br-md'
                      : 'bg-white text-[#2d1e13] border border-[#e2c9a0] rounded-bl-md shadow-sm'
                  }`}
                >
                  <div className="text-sm leading-relaxed whitespace-pre-wrap">
                    <ReactMarkdown
                      components={{
                        a: ({ node, href, children, ...props }) => {
                          const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                            if (href && href.startsWith('/')) {
                              e.preventDefault();
                              router.push(href);
                            }
                            // External links will use default behavior
                          };
                          
                          return (
                            <a
                              {...props}
                              href={href || '#'}
                              onClick={handleClick}
                              className={message.isUser 
                                ? "text-white underline hover:text-gray-200 transition-colors" 
                                : "text-[#4b2e13] underline hover:text-[#a47551] transition-colors"
                              }
                            >
                              {children}
                            </a>
                          );
                        },
                        p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />,
                      }}
                    >
                      {message.text}
                    </ReactMarkdown>
                  </div>
                  <p className={`text-xs mt-2 opacity-70 ${message.isUser ? 'text-white' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                  {/* Quick action buttons for bot messages */}
                  {!message.isUser && message.text.includes("Would you like me to tell you more") && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      <button
                        onClick={() => setInputMessage("Tell me more")}
                        className="px-2 py-1 bg-[#f5e9da] text-[#2d1e13] rounded-full text-xs border border-[#e2c9a0] hover:bg-[#4b2e13] hover:text-white transition-colors duration-200 active:scale-95"
                      >
                        Tell me more
                      </button>
                      <button
                        onClick={() => setInputMessage("Give me more details")}
                        className="px-2 py-1 bg-[#f5e9da] text-[#2d1e13] rounded-full text-xs border border-[#e2c9a0] hover:bg-[#4b2e13] hover:text-white transition-colors duration-200 active:scale-95"
                      >
                        More details
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-[#2d1e13] border border-[#e2c9a0] rounded-2xl rounded-bl-md shadow-sm p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-[#a47551] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[#a47551] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-[#a47551] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-[#e2c9a0]">
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me about Shubh..."
                className="flex-1 px-4 py-2 border border-[#e2c9a0] rounded-full focus:outline-none focus:ring-2 focus:ring-[#4b2e13] focus:border-transparent text-[#2d1e13] bg-[#faf7f2]"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isLoading}
                className="w-10 h-10 bg-[#4b2e13] text-white rounded-full hover:bg-[#a47551] focus:outline-none focus:ring-2 focus:ring-[#4b2e13] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 transform rotate-90"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
