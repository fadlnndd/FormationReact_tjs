import React from 'react';
import './App.css';
import Button from './components/Button/Button';

class App extends React.Component {
  #counter
  constructor(props){
    super(props);
    this.#counter=0;
  }

  render() {
    return (
      <div className="App">
        valeur {this.#counter}
        <hr />
        <Button text="ajouter 1" type="button" onButtonClicked={()=>{
          alert('le button est clicked');
          this.#counter += 1;
          console.log(this.#counter);
        }} />
        <Button text="enlever 1" type="button"/>
      </div>
    );
  }
}

export default App;
