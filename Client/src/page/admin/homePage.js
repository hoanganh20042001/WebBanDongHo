import React from 'react';
import Sidebar from '../../component/general/sidebar'
import ApexRadiarChart from '../../component/admin/dashboard';
import { Container, Grid } from '@mantine/core';

export default function HomeAdminPage() {
    return <Grid columns={12}>
        <Grid.Col style={{ padding: 0 }} xs={12} sm={3}><Sidebar selected={0} /></Grid.Col>
        {/* <Grid.Col style={{ padding: 0 }} xs={12} sm={9}> <ApexRadiarChart /></Grid.Col> */}
    </Grid >
}