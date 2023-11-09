import { useState } from "react";
import axios  from 'axios'
import './App.css'
const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Here you can implement your login logic, e.g., sending a request to the server.
    // For simplicity, I'm just checking if the username and password are not empty.
    const data={
      "email":username,
      "pass":password
    }
    axios.post("http://localhost:3500/login",data).then((res)=>{
      if(res.status===200){
        alert(res.data.message)
      }
    }).catch((res)=>console.log(res));
  };

  const handleRegister = async () => {
    
    const data={
      "email":username,
      "pass":password
    }
    axios.post("http://localhost:3500/register",data).then((res)=>{
      if(res.status===200){
        alert(res.data.message)
      }
    });
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="input-group">
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button><br /><br />
      <button onClick={handleRegister}>Register</button>
      {loggedIn && <p>Welcome, {username}! You are logged in.</p>}
    </div>

  )
}
export default App;
