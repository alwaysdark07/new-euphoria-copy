import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/base.css'
import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <MantineProvider theme={{
      fontFamily: 'CoreSans, sans-serif',
    }}>
      <App />
    </MantineProvider>
  </Provider>

);