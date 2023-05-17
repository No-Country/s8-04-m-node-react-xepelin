import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UserInfo from './pages/UserInfo.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserInfo />
  </React.StrictMode>,
)
