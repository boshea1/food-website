import React from 'react';
import Grid from '../components/Grid'
import food from '../data/food'
import '../styles/Home.module.css'

function App() {

  return (
    <div className="wrapper">
      <Grid food={food}/>
    </div>
  );
}

export default App;
