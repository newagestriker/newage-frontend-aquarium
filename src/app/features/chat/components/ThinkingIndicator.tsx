export default function ThinkingIndicator() {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-full bg-[#1FB2A6] flex items-center justify-center flex-shrink-0">
        <span className="text-[#0E1A26] font-bold text-xs">AI</span>
      </div>
      <div className="bg-[#16263A] rounded-2xl p-4 border border-[#4ED8DC26] max-w-3xl" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)' }}>
        <div className="flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-[#4ED8DC] animate-bounce"></div>
          <div className="w-2 h-2 rounded-full bg-[#4ED8DC] animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 rounded-full bg-[#4ED8DC] animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
}
