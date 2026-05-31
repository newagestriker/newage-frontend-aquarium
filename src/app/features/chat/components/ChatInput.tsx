import React, { useState, useRef, useEffect } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isThinking: boolean;
}

export default function ChatInput({ onSendMessage, isThinking }: ChatInputProps) {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 150)}px`;
    }
  }, [message]);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim() && !isThinking) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex items-center gap-2 bg-[#16263A] rounded-2xl border border-[#4ED8DC26] p-3">
        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask about freshwater fish..."
          className="flex-1 bg-transparent text-[#F4FBFB] placeholder-[#9AAEB8] resize-none focus:outline-none max-h-36"
          rows={1}
          disabled={isThinking}
        />
        <button
          type="submit"
          disabled={!message.trim() || isThinking}
          className={`w-10 h-10 rounded-full flex items-center justify-center ${message.trim() && !isThinking ? 'bg-[#4ED8DC] text-[#0E1A26]' : 'bg-[#16263A] text-[#9AAEB8]'} border border-[#4ED8DC26]`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
          </svg>
        </button>
      </div>
    </form>
  );
}