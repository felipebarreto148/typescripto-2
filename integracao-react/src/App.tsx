import React from 'react';
import './App.css';
// components
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter initialValue={1000} />
    </div>
  );
}

export default App;
