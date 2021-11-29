import React from 'react';
import { Container } from '@mui/material';
import Layout from '../../components/Layout/Layout';
import AuthForm from '../../components/AuthForm/AuthForm';

const LogInPage = () => (
  <Container maxWidth="sm">
    <Layout>
      <AuthForm type="login" name="Log In" />
    </Layout>
  </Container>
);

export default LogInPage;
