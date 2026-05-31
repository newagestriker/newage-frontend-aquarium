import { formatTimestamp } from '@/utils/timestamp';

export interface Message {
  id: string;
  isUser: boolean;
  content: string;
  timestamp?: string | Date;
}

// Use a fixed timestamp to avoid SSR hydration mismatches
const FIXED_TIMESTAMP = new Date(2026, 4, 20, 19, 59);

export const DEFAULT_MESSAGES: Message[] = [
  {
    id: crypto.randomUUID(),
    isUser: false,
    content: "Hello! I'm your freshwater fishkeeping assistant. Ask me anything about fish care, tank setup, or water parameters!",
    timestamp: FIXED_TIMESTAMP
  },
  {
    id: crypto.randomUUID(),
    isUser: false,
    content: "I can help you with questions like:\n• What fish are good for beginners?\n• How to set up a new tank?\n• Water parameter guidelines?\n• Fish compatibility?",
    timestamp: FIXED_TIMESTAMP
  }
];
