'use client';
import { Grid, Box, TextField, Button } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import UsersTable from '../components/dashboard/UsersTable';
import { useEffect, useState } from 'react';
import { useUsersStore } from '@/store/usersStore';
import CustomTextField from '../components/forms/theme-elements/CustomTextField';


const TypographyPage = () => {
  const { users, fetchUsers } = useUsersStore();
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchUsers('');
  }, [fetchUsers]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const handleSearch = () => {
    fetchUsers(filter);
  };

  return (
    <PageContainer title="Typography" description="this is Typography">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={11} md={12}>
            <Box sx={{display: 'flex', flexDirection: 'row', gap: 2, paddingBottom: 2}}>
              <CustomTextField
                variant="outlined"
                style={{width: 300}}
                placeholder="User ID or Phone number"
                value={filter}
                onChange={handleFilterChange}
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

            <UsersTable 
              users={users}
            />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default TypographyPage;
