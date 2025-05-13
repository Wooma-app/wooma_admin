'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import ReportsSummary from '@/app/(DashboardLayout)/components/dashboard/ReportsSummary';
import ReportsTable from '@/app/(DashboardLayout)/components/dashboard/ReportsTable';
import MonthlyEarnings from '@/app/(DashboardLayout)/components/dashboard/MonthlyEarnings';
import { useReportsStore } from '@/store/reportsStore';
import { useEffect } from 'react';

const Dashboard = () => {
  const { reports, paidReportsCnt, fetchReports } = useReportsStore();

  useEffect(() => {
    fetchReports('', '');
  }, [fetchReports]);

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
            <ReportsTable reports={reports} />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Dashboard;
