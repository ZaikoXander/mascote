import { create } from 'zustand';

import type Message from '@/pages/Admin/types/Message';

import api from '@/lib/api';

interface MessageState {
  messages: Message[];
  setMessages: (messages: Message[]) => void;
  getMessageById: (id: number) => Message | undefined;
  fetchMessages: () => void;
}

const useMessageStore = create<MessageState>((set, get) => ({
  messages: [],
  setMessages: (messages) => set({ messages }),
  getMessageById: (id) => get().messages?.find((message) => message.id === id),
  fetchMessages: async () => {
    const { data: messages }: { data: Message[] } = await api.get('/messages')
    set({ messages });
  },
}));

export default useMessageStore;