import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './components.css';
import reportWebVitals from './reportWebVitals';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SideBar />
    {/* <TopBar title="Dashboard"/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
