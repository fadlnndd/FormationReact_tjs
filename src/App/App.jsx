import React from 'react';
import './App.css';
import Button from './components/Button/Button';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={counter:0};
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('state',prevState, this.state)
  }

  render() {
    return (
      <div className="App">
        valeur {this.state.counter}
        <hr />
        <Button text="ajouter 1" type="button" onButtonClicked={()=>{
          // alert('le button est clicked');
          this.setState({counter:this.state.counter+1})
          // console.log(this.state.counter);
        }} />
        <Button text="enlever 1" type="button"/>
      </div>
    );
  }
}

export default App;
