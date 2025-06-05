'use client'
import { Grid, Box, Button } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import ReportsSummary from '@/app/(DashboardLayout)/components/dashboard/ReportsSummary';
import ReportsTable from '@/app/(DashboardLayout)/components/dashboard/ReportsTable';
import MonthlyEarnings from '@/app/(DashboardLayout)/components/dashboard/MonthlyEarnings';
import { useReportsStore } from '@/store/reportsStore';
import { useEffect, useState } from 'react';
import CustomTextField from './components/forms/theme-elements/CustomTextField';

const Dashboard = () => {
  const { reports, paidReportsCnt, fetchReports } = useReportsStore();
  const [status, setStatus] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');

  useEffect(() => {
    fetchReports('', '');
  }, [fetchReports]);

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };
  const handlePaymentStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentStatus(e.target.value);
  };

  const handleSearch = () => {
    fetchReports(status, paymentStatus);
  };

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <ReportsSummary
                  totalReportsCnt={reports?.length ?? 0}
                  paidReportsCnt={paidReportsCnt}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Box sx={{display: 'flex', flexDirection: 'row', gap: 2, paddingBottom: 2}}>
              <CustomTextField
                variant="outlined"
                style={{width: 300}}
                placeholder="Status"
                value={status}
                onChange={handleStatusChange}
              />
              <CustomTextField
                variant="outlined"
                style={{width: 300}}
                placeholder="Payment Status"
                value={paymentStatus}
                onChange={handlePaymentStatusChange}
              />
              <Button
                color="primary"
                variant="contained"
                size="large"
                type="submit"
                onClick={handleSearch}
              >
                Search
              </Button>
            </Box>
            <ReportsTable reports={reports} />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Dashboard;
