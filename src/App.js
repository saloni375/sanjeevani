import React from 'react';
import Navbar from './components/navbar';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import CountdownTimer from './components/CountDown';
import ComingSoon from './components/commingSoon';
import Sub from './components/sub';

//https://bootstrapmade.com/demo/ComingSoon/

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ComingSoon/>
      <CountdownTimer />
      <Sub/>
    </div>
  );
};

export default App;
