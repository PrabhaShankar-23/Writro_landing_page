import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PublishPane from './components/PublishPane';




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     <Router>
     <Navbar/>
     <Routes>
     <Route path='/' element= { <App />}/>
     <Route path='/Login' element= { <Login />}/>
     <Route path='/publish' element= {<PublishPane/>}/>
     <Route path='/publish/cover' element= {<PublishPane/>}/>

     <Route path='*' element= { <App />}/>
     </Routes>
     {/* <App /> */}
      <Footer/>
     </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
