import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const listStyle = {
    textAlign : 'left'
  };

  const data = [
    {name: 'Fokrul Islam', age: 17, gender: 'Male'},
    {name: 'Afsar Uddin', age: 18, gender: 'Male'},
    {name: 'Emon Hasan', age: 20, gender: 'Male'},
    {name: 'Hasib Uddin', age: 19, gender: 'Male'}
  ];

  const friends = ["Fokrul Islam", "Afsar", "Emon", "Nyeem", "Somir"]; 
  return (
    <div className="App">
      <header className="App-header">

        <Counter></Counter>

        {
          data.map(person => <Info person={person}></Info>)
        }

        <h2>Friends Name</h2>
        <ul>
          {
            friends.map(friend => <li style={listStyle}>{friend}</li>)
          }
        </ul>
        
        <h2>Dynamic Data Form Server</h2>
        <Users></Users>
      </header>
    </div>
  );
}

function Counter(props) {
  const [count, setCount] = useState(0); 
  
  return (
    <div style={{marginBottom: '20px'}}>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count - 1)} style={{padding: '10px 20px'}}>Decrease</button>
      <button onClick={() => setCount(count + 1)} style={{padding: '10px 20px'}}>Increase</button>
    </div>
  )
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
      <h5>Gender : {gender}</h5>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data));
  })
  return(
    <div>
      <ul style={{textAlign: 'left'}}>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
