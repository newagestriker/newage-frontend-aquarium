import React from 'react';

export default function WelcomeMessage() {
  return (
    <div className="mb-8 p-4 bg-[#16263A] rounded-2xl border border-[#4ED8DC26]">
      <h3 className="text-lg font-bold mb-3">Welcome to Freshwater Fish Guide</h3>
      <p className="text-[#9AAEB8] mb-4">
        I'm here to help you with all your freshwater fishkeeping questions!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="flex items-start">
          <div className="text-[#4ED8DC] mr-2 mt-1">•</div>
          <p className="text-[#9AAEB8]">Fish care tips and advice</p>
        </div>
        <div className="flex items-start">
          <div className="text-[#4ED8DC] mr-2 mt-1">•</div>
          <p className="text-[#9AAEB8]">Tank setup guidance</p>
        </div>
        <div className="flex items-start">
          <div className="text-[#4ED8DC] mr-2 mt-1">•</div>
          <p className="text-[#9AAEB8]">Water parameter management</p>
        </div>
        <div className="flex items-start">
          <div className="text-[#4ED8DC] mr-2 mt-1">•</div>
          <p className="text-[#9AAEB8]">Fish compatibility information</p>
        </div>
      </div>
    </div>
  );
}