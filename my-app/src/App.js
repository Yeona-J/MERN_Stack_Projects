import React, {useState} from 'react';
import './App.css';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="App">
    <h1>Welcome to the Game!</h1>
    <form>
      <label>
        Username:
        <input type="text" />
      </label>
      <br />
      <label>
        Password:
        <input type="text" />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default App;
