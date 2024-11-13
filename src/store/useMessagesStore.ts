import { create } from 'zustand';

import type Message from '@/pages/Admin/types/Message';

interface MessageState {
  messages: Message[];
  setMessages: (messages: Message[]) => void;
  getMessageById: (id: number) => Message | undefined;
}

const useMessageStore = create<MessageState>((set, get) => ({
  messages: [],
  setMessages: (messages) => set({ messages }),
  getMessageById: (id) => get().messages?.find((message) => message.id === id)
}));

export default useMessageStore;