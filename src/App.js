import React from 'react';
import './App.css';
import {Navbar}from './features/navbar/Navbar'
import {Posts}from './features/posts/Posts'

function App() {
  return (
    <div>
      <Navbar/>
      <Posts/>
    </div>
  );
}

export default App;
