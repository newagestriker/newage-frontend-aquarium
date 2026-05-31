import React, { useState } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isThinking: boolean;
}

export default function ChatInputArea({ onSendMessage, isThinking }: ChatInputProps) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() && !isThinking) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Ask about freshwater fish..."
        className="flex-1 bg-[#16263A] border border-[#4ED8DC26] rounded-xl px-4 py-3 text-[#F4FBFB] placeholder-[#9AAEB8] focus:outline-none focus:ring-2 focus:ring-[#4ED8DC] focus:border-transparent"
        disabled={isThinking}
      />
      <button
        type="submit"
        disabled={isThinking || !inputValue.trim()}
        className="bg-[#1FB2A6] hover:bg-[#1FB2A6]/80 text-[#0E1A26] font-bold rounded-xl px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Send
      </button>
    </form>
  );
}