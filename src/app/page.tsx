'use client';

import React from 'react';
import Sidebar from './features/chat/components/Sidebar';
import ChatContainer from './features/chat/components/ChatContainer';


export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <ChatContainer />
    </div>
  );
}
