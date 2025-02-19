import React, { useState } from 'react'; // Import useState
import './App.css';

function App() {
  const [favoriteTeam, setFavoriteTeam] = useState('');
  const [savedTeam, setSavedTeam] = useState('');

  const handleTeamChange = (event) => {
    setFavoriteTeam(event.target.value);
  };

  const saveTeam = () => {
    setSavedTeam(favoriteTeam);
  };

  return (
    <div>
      <h1>Welcome to Courtside</h1>
      <p>Your favorite team: {savedTeam}</p>
      <input
        type="text"
        placeholder="Enter your favorite team"
        value={favoriteTeam}
        onChange={handleTeamChange}
      />
      <button onClick={saveTeam}>Save Team</button>
    </div>
  );
}

export default App;