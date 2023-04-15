import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './app/store';
import DialogProvider from './contexts/DialogContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <DialogProvider>
        <App />
      </DialogProvider>
    </Provider>
  </React.StrictMode>
);
