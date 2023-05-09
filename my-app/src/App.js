import React, {useState} from 'react';
import axios from 'axios';
import WelcomPage from './Welcome';
import './App.css';

function App(props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000', {username, password})
    .then((response) => {
      console.log(response);
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
    <WelcomePage {...props} username={username} />
    <form onSubmit={handleSubmit}>
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
