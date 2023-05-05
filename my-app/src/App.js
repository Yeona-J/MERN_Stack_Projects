import React, {useState} from 'react';
import './App.css';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => { // ES6
    setUsername(event.target.value)
  };

  const handlerPasswordChange = (event) => {
    setPassword(event.target.value)
  };

  return (
    <div className="App">
    <h1>Welcome to the Game!</h1>
    <form>
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
