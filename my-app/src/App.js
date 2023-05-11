import React, {useState} from 'react';
import axios from 'axios';
import WelcomPage from './Welcome';
import './App.css';
import {useNavigate, Route, Routes} from 'react-router-dom';

function App(props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000', {username, password})
    .then((response) => {
      console.log(response);
      navigate('/welcome');
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const handleUsernameChange = (event) => { // ES6
    setUsername(event.target.value)
  };

  const handlerPasswordChange = (event) => {
    setPassword(event.target.value)
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/welcome" element={<WelcomePage {...props} username={username} />} />
        <Route path="/" element={<h1>Welcome to the game</h1>} />
      </Routes>
    <form onSubmit={handleSubmit} action="/welcome">
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="text" value={password} onChange={handlerPasswordChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default App;
