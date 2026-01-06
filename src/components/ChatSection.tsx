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

// Constants for text content to avoid ESLint unescaped entities warnings
const INITIAL_MESSAGE = "Hi! I&apos;m ShubhGPT 🤖 Ask me anything about Shubh&apos;s background, projects, experience, or skills. I&apos;m here to help you learn more about him!";
const ERROR_MESSAGE = "Sorry, I&apos;m having trouble connecting right now. Please try again later!";
const CHAT_DESCRIPTION = "Ask me anything about Shubh&apos;s background, projects, experience, or skills. I&apos;m powered by AI and have comprehensive knowledge about him!";
const EDUCATION_DESC = "Learn about Shubh&apos;s academic background and professional journey";

const ChatSection = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: INITIAL_MESSAGE,
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

  // Focus input when loading completes - only if user has interacted with chat
  useEffect(() => {
    if (!isLoading && inputRef.current && messages.length > 1) {
      // Only auto-focus if user has sent a message (not on initial load)
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isLoading, messages.length]);

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
        text: ERROR_MESSAGE,
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

  const suggestedQuestions = [
    "Tell me about Shubh's experience",
    "What projects has he worked on?",
    "What are his technical skills?",
    "Tell me about his education",
    "What's his background in AI/ML?",
    "How can I contact Shubh?"
  ];

  const quickActions = [
    "Tell me more",
    "Give me more details",
    "Can you elaborate?",
    "What else should I know?"
  ];

  const handleSuggestedQuestion = (question: string) => {
    setInputMessage(question);
  };

  return (
    <section className="w-full bg-[#f5e9da] min-h-[80vh] py-8 sm:py-12 md:py-16 relative z-10 rounded-3xl mx-auto max-w-7xl">
      <div className="max-w-4xl mx-auto px-8 sm:px-12 md:px-16">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#2d1e13', fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
            🤖 Chat with ShubhGPT
          </h2>
            <p className="text-lg sm:text-xl text-[#2d1e13] opacity-90 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
              {CHAT_DESCRIPTION}
            </p>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-[#e2c9a0] overflow-hidden">
          {/* Chat Messages */}
          <div ref={messagesContainerRef} className="h-96 overflow-y-auto p-6 space-y-4 bg-[#faf7f2]">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-2xl transition-all duration-300 ease-out ${
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
                    <div className="flex flex-wrap gap-2 mt-3">
                      {quickActions.map((action, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestedQuestion(action)}
                          className="px-3 py-1 bg-[#f5e9da] text-[#2d1e13] rounded-full text-xs border border-[#e2c9a0] hover:bg-[#4b2e13] hover:text-white transition-colors duration-200 active:scale-95"
                        >
                          {action}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-[#2d1e13] border border-[#e2c9a0] rounded-2xl rounded-bl-md shadow-sm p-4">
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

          {/* Suggested Questions */}
          {messages.length === 1 && (
            <div className="px-6 py-4 bg-[#f5e9da] border-t border-[#e2c9a0]">
              <p className="text-sm font-medium text-[#2d1e13] mb-3">Try asking:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedQuestion(question)}
                    className="px-3 py-2 bg-white text-[#2d1e13] rounded-full text-sm border border-[#e2c9a0] hover:bg-[#4b2e13] hover:text-white transition-colors duration-200 active:scale-95"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-6 bg-white border-t border-[#e2c9a0]">
            <form onSubmit={handleSubmit} className="flex space-x-3">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything about Shubh&hellip;"
                className="flex-1 px-4 py-3 border border-[#e2c9a0] rounded-full focus:outline-none focus:ring-2 focus:ring-[#4b2e13] focus:border-transparent text-[#2d1e13] bg-[#faf7f2] text-base"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isLoading}
                className="w-12 h-12 bg-[#4b2e13] text-white rounded-full hover:bg-[#a47551] focus:outline-none focus:ring-2 focus:ring-[#4b2e13] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center active:scale-95"
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

        {/* Features */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-[#4b2e13] rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white text-xl">🎓</span>
            </div>
            <h3 className="font-semibold text-[#2d1e13] mb-2">Education & Experience</h3>
            <p className="text-sm text-[#2d1e13] opacity-80">{EDUCATION_DESC}</p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-[#4b2e13] rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white text-xl">💻</span>
            </div>
            <h3 className="font-semibold text-[#2d1e13] mb-2">Projects & Skills</h3>
            <p className="text-sm text-[#2d1e13] opacity-80">Discover his technical projects, skills, and achievements</p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-[#4b2e13] rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white text-xl">🤝</span>
            </div>
            <h3 className="font-semibold text-[#2d1e13] mb-2">Connect & Contact</h3>
            <p className="text-sm text-[#2d1e13] opacity-80">Get contact information and social media links</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;
