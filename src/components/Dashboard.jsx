import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/dashboard.scss";

const Dashboard = () => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (id) => {
    if (!favorites.includes(id)) {
      setFavorites([...favorites, id]);
    } else {
      setFavorites(favorites.filter((item) => item !== id));
    }
  };

  return (
    <div className="dashboard">
      <h1>Dashboard Page</h1>
      <Link to="/list">Go to List Page</Link>
      <ul>
        {Array.from({ length: 10 }, (_, index) => index + 1).map((id) => (
          <li key={id}>
            Item {id}
            <button onClick={() => addToFavorites(id)}>
              {favorites.includes(id) ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
