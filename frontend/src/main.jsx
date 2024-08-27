import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Custom CSS styles
import App from './App'; // Main App component
import { Provider } from 'react-redux'; // Redux Provider (if using Redux for state management)
import store from './redux/store'; // Import Redux store (if using Redux)
import 'bootstrap/dist/css/bootstrap.min.css';

// Render the React application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
)