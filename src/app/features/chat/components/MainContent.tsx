import React from 'react';

interface MainContentProps {
  children: React.ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  return (
    <main className="flex-1 overflow-y-auto p-4 pb-24">
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </main>
  );
}