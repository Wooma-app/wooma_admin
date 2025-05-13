
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from '@mui/material/styles';
import { Grid, Stack, Typography, Avatar } from '@mui/material';
import { IconArrowUpLeft } from '@tabler/icons-react';

import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

interface ReportsSummaryProps {
    totalReportsCnt: number | 0;
    paidReportsCnt: number | 0;
}

const ReportsSummary:React.FC<ReportsSummaryProps> = ({totalReportsCnt, paidReportsCnt}) => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = '#ecf2ff';
  const successlight = theme.palette.success.light;

  // chart
  const optionscolumnchart: any = {
    labels: ["Paid", "Unpaid"],
    chart: {
      type: 'donut',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 155,
    },
    colors: [primary, primarylight, '#F9F9FD'],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '75%',
          background: 'transparent',
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
      y: {
        formatter: (value: number) => `${value} reports`,
        title: {
          formatter: (seriesName: string) => `${seriesName}`,
        },
      },
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 120,
          },
        },
      },
    ],
  };
  const seriescolumnchart: any = [7000, 5000];

  return (
    <DashboardCard title="Reports Summary">
      <Grid container spacing={3}>
        {/* column */}
        <Grid item xs={7} sm={7}>
          <Typography variant="h3" fontWeight="700">
            { totalReportsCnt.toLocaleString() }
          </Typography>
          <Stack direction="row" spacing={1} mt={1} alignItems="center">
            
            <Typography variant="subtitle2" fontWeight="600">
              Total Reports
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              Created
            </Typography>
          </Stack>
          <Stack mt={3} >
            {/* <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                sx={{ width: 9, height: 9, bgcolor: primary, svg: { display: 'none' } }}
              ></Avatar>
              <Typography variant="subtitle2" color="textSecondary">
                2022
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                sx={{ width: 9, height: 9, bgcolor: primarylight, svg: { display: 'none' } }}
              ></Avatar>
              <Typography variant="subtitle2" color="textSecondary">
                2023
              </Typography>
            </Stack> */}
            <Typography variant="h3" fontWeight="700">
              { paidReportsCnt.toLocaleString() }
            </Typography>
            <Stack direction="row" spacing={1} mt={1} alignItems="center">
              
              <Typography variant="subtitle2" fontWeight="600">
                Total Reports
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Paid
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        {/* column */}
        <Grid item xs={5} sm={5}>
          <Chart
            options={optionscolumnchart}
            series={seriescolumnchart}
            type="donut"
            height={150} width={"100%"}
          />
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default ReportsSummary;
