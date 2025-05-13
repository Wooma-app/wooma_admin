import { create } from 'zustand';
import axios from 'axios';
import { BASE_API_URL } from '@/lib/config';
import { User } from '@/lib/interface';

interface ReportState {
  users: User[] | null;
  fetchUsers: (userId: string, phoneNumber: string) => Promise<void>;
}

export const useUsersStore = create<ReportState>((set) => ({
  users: null,
  fetchUsers: async (userId: string, phoneNumber: string) => {
    try {
      const res = await axios.get(`${BASE_API_URL}/report/admin-user-list`, {
        params: { userId, phoneNumber }
      });
      const { users } = res.data;
      console.log('--users--', users);
      set({ users });
    } catch(error) {
      console.error('Error fetching reports:', error);
    }
  },
}));