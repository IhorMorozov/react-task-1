import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar/Navbar';
import { auth } from './store/asyncActions/auth';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
