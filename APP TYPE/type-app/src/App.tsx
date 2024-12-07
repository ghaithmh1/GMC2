import React from 'react';
import Greeting from './Components/Greeting';
import Counter from './Components/Counter';
import './index.css';

const App: React.FC = () => {
  return (
    <>
      <Greeting name="ghaith" />
      <Counter />
    </>
  );
};

export default App;
