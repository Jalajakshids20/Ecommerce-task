import React, { useState, useEffect } from 'react';

const Login = () => {
  const storedUsername = localStorage.getItem('username');
  const [username, setUsername] = useState(storedUsername || '');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(!!storedUsername);

  useEffect(() => {
    localStorage.setItem('username', username);
  }, [username]);

  const handleLogin = () => {
    // Simulate authentication logic (replace with actual authentication)
    if (username === 'demo' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    // Simulate logout
    localStorage.removeItem('username');
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1>Welcome, {username}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h1>Login</h1>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};

export default Login;
