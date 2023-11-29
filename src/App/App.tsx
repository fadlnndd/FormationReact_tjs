import React from 'react';
import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">Hello World !
      <hr />
      <Button text="toto" type="reset"/>
      <Button text="tata" type="submit"/>
      <Button text="titi" 
        size={{
          margin:{bottom:'12px', right: '24px'}, 
          padding: { h: "20px", w: "40px"}
        }} 
      />
      <Button text="tutu" type="button"/>
    </div>
  );
}

export default App;
