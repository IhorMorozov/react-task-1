import React from 'react';
import { Container } from '@mui/material';
import Layout from '../../components/Layout/Layout';
import AuthForm from '../../components/AuthForm/AuthForm';

const RegistrationPage = () => (
  <Container maxWidth="sm">
    <Layout>
      <AuthForm type="registration" name="Register" />
    </Layout>
  </Container>
);

export default RegistrationPage;
