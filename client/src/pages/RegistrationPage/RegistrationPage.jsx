import React from 'react';
import { Container } from '@mui/material';
import Layout from '../../components/Layout/Layout';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

const RegistrationPage = () => (
  <Container maxWidth="sm">
    <Layout>
      <RegistrationForm />
    </Layout>
  </Container>
);

export default RegistrationPage;
