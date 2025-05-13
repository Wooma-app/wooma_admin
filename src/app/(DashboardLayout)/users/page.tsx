'use client';
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import UsersTable from '../components/dashboard/UsersTable';
import { useEffect } from 'react';
import { useUsersStore } from '@/store/usersStore';


const TypographyPage = () => {
  const { users, fetchUsers } = useUsersStore();
  
  useEffect(() => {
    fetchUsers('', '');
  }, [fetchUsers]);

  return (
    <PageContainer title="Typography" description="this is Typography">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <UsersTable users={users} />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default TypographyPage;
