'use client';
import React, { forwardRef } from 'react';

interface MainContentProps {
  children: React.ReactNode;
}

const MainContent = forwardRef<HTMLElement, MainContentProps>(({ children }, ref) => {
  return (
    <main className="flex-1 overflow-y-auto p-4 pb-24" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </main>
  );
});

MainContent.displayName = 'MainContent';

export default MainContent;