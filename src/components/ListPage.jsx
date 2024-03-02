import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/listpage.scss';

const ListPage = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  const loadMoreItems = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/1/photos?_page=${page}&_limit=10`);
    const data = await response.json();
    setItems((prevItems) => [...prevItems, ...data]);
    setPage((prevPage) => prevPage + 1);
  };

  const addToFavorites = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((item) => item !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };
  

  useEffect(() => {
    loadMoreItems();
  }, []);

  window.onscroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      loadMoreItems();
    }
  };

  return (
    <div className="listpage">
      <h1>List Page</h1>
      <button onClick={() => navigate(-1)}>Back</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <img src={item.thumbnailUrl} alt={item.title} />
            <p>ID: {item.id}</p>
            <p>Title: {item.title}</p>
            <button onClick={() => addToFavorites(item.id)}>
              {favorites.includes(item.id) ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPage;
