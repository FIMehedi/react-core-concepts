import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const friendStyle = {
    textAlign : 'left'
  };

  const data = [
    {name: 'Fokrul Islam Mehedi', age: 17, gender: 'Male'},
    {name: 'Afsar Uddin', age: 18, gender: 'Male'},
    {name: 'Emon Hasan', age: 20, gender: 'Male'},
    {name: 'Hasib Uddin', age: 19, gender: 'Male'}
  ];

  const friends = ["Fokrul Islam", "Afsar", "Emon", "Nyeem", "Somir"]; 
  return (
    <div className="App">
      <header className="App-header">

        {
          data.map(person => <Info person={person}></Info>)
        }
    
        

      </header>
    </div>
  );
}

function Info(props) {
  const InfoStyle = {
    border: '1px solid white',
    margin: '10px',
    padding: '10px 30px',
    width: '60%',
  }
  const {name, age, gender} = props.person;
  return(
    <div style={InfoStyle}>
      <h3>Name : {name}</h3>
      <h5>Age : {age}</h5>
      <h5>Gender: {gender}</h5>
    </div>
  )
}

export default App;
