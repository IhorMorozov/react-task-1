import React from 'react';
import { Container } from '@mui/material';
import Layout from '../../components/Layout/Layout';
import LoginForm from '../../components/LoginForm/LoginForm';

const LogInPage = () => (
  <Container maxWidth="sm">
    <Layout>
      <LoginForm />
    </Layout>
  </Container>
);

export default LogInPage;
