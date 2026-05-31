'use client';

import { useState } from 'react';
import { Plus, MessageSquare, Loader2 } from 'lucide-react';

interface ThreadSelectorProps {
  threads: string[];
  currentThreadId: string | null;
  loading: boolean;
  onSwitchThread: (threadId: string) => void;
  onCreateNewThread: () => void;
}

export function ThreadSelector({
  threads,
  currentThreadId,
  loading,
  onSwitchThread,
  onCreateNewThread,
}: ThreadSelectorProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatThreadId = (id: string) => {
    if (id.length > 20) {
      return `${id.slice(0, 8)}...${id.slice(-4)}`;
    }
    return id;
  };

  return (
    <div className="w-full border-b border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="p-3 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Sessions</span>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={onCreateNewThread}
              className="h-7 w-7 p-0 inline-flex items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
              title="New Session"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="h-7 w-7 p-0 inline-flex items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
            >
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {isExpanded && (
          <div className="space-y-1">
            {loading ? (
              <div className="flex items-center justify-center py-2">
                <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
              </div>
            ) : threads.length === 0 ? (
              <p className="text-xs text-muted-foreground text-center py-2">
                No sessions available
              </p>
            ) : (
              <select
                value={currentThreadId || ''}
                onChange={(e) => onSwitchThread(e.target.value)}
                className="h-8 text-xs w-full rounded-md border border-input bg-background px-3 py-1"
              >
                <option value="">Select a session</option>
                {threads.map((threadId) => (
                  <option key={threadId} value={threadId}>
                    {formatThreadId(threadId)}
                  </option>
                ))}
              </select>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
