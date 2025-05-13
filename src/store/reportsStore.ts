import { create } from 'zustand';
import axios from 'axios';
import { BASE_API_URL } from '@/lib/config';
import { Report } from '@/lib/interface';

interface ReportState {
  reports: Report[] | null;
  paidReportsCnt: number | 0;
  fetchReports: (status: string, paymentStatus: string) => Promise<void>;
}

export const useReportsStore = create<ReportState>((set) => ({
  reports: null,
  paidReportsCnt: 0,
  fetchReports: async (status: string, paymentStatus: string) => {
    try {
      const res = await axios.get(`${BASE_API_URL}/report/admin-report-list`, {
        params: { status, paymentStatus }
      });
      const { reports, paidReportsCnt } = res.data;
      console.log(reports);
      set({ reports, paidReportsCnt: paidReportsCnt || 0 });
    } catch(error) {
      console.error('Error fetching reports:', error);
    }
  },
}));