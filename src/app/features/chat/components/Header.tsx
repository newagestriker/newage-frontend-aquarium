import React from 'react';

export default function Header() {
  return (
    <header className="p-4 bg-[#0E1A26] border-b border-[#4ED8DC26]">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1FB2A6] flex items-center justify-center">
            <span className="text-[#0E1A26] font-bold">F</span>
          </div>
          <div>
            <h1 className="text-xl font-bold">Freshwater Fish Guide</h1>
            <p className="text-[#9AAEB8] text-sm">AI-powered fishkeeping assistant</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-[#9AAEB8] text-sm">Online</span>
        </div>
      </div>
    </header>
  );
}