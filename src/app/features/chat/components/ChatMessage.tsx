import React from 'react';
import ReactMarkdown from 'react-markdown';
import { formatTimestamp } from '@/utils/timestamp';
import ThinkingIndicator from './ThinkingIndicator';

interface ChatMessageProps {
  isUser: boolean;
  content: string;
  timestamp?: string | Date;
  isThinking?: boolean;
}

export default function ChatMessage({ isUser, content, timestamp, isThinking }: ChatMessageProps) {
  let displayTime = '';
  if (timestamp) {
    let date: Date;
    if (typeof timestamp === 'string') {
      // Try parsing as a full date first
      date = new Date(timestamp);
      // If that fails, check if it's a time-only string like "19:57"
      if (isNaN(date.getTime())) {
        const timeMatch = timestamp.match(/^(\d{1,2}):(\d{2})$/);
        if (timeMatch) {
          const [_, hours, minutes] = timeMatch;
          const today = new Date();
          date = new Date(today.getFullYear(), today.getMonth(), today.getDate(), parseInt(hours), parseInt(minutes));
        }
      }
    } else {
      date = timestamp;
    }
    if (!isNaN(date.getTime())) {
      displayTime = formatTimestamp(date);
    }
  }
  if (isThinking) {
    return <ThinkingIndicator />;
  }

  return (
    <div className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : ''}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${isUser ? 'bg-[#4ED8DC]' : 'bg-[#1FB2A6]'}`}>
        <span className={`font-medium text-xs ${isUser ? 'text-[#0E1A26]' : 'text-[#0E1A26]'}`}>
          {isUser ? 'U' : 'AI'}
        </span>
      </div>
      <div className={`rounded-2xl p-4 max-w-3xl ${isUser ? 'bg-[#1FB2A6] text-[#0E1A26]' : 'bg-[#16263A] border border-[#4ED8DC15] text-[#B0C4C8]'}`} style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)' }}>
        <div className="prose prose-sm max-w-none prose-p:whitespace-pre-wrap prose-pre:bg-[#0E1A26] prose-pre:text-[#A8BEC3] prose-code:text-[#3D7D7E] prose-headings:font-normal prose-a:text-[#3D7D7E]">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
        {displayTime && (
          <div className={`text-xs mt-2 ${isUser ? 'text-[#0E1A26]/70' : 'text-[#9AAEB8]/70'}`}>
            {displayTime}
          </div>
        )}
      </div>
    </div>
  );
}