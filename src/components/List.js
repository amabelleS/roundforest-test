import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';

import './List.css';

const List = () => {
  const [list, setList] = useState([]);

  const API_URL = 'https://jsonplaceholder.typicode.com/posts';

  const fetchList = async () => {
    try {
      const response = await fetch(`${API_URL}`);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      console.log('🚀 ~ file: List.js ~ line 15 ~ fetchList ~ data', data);

      setList(data);
    } catch (error) {
      console.log(
        '🚀 ~ file: MoviesList.jsx ~ line 27 ~ searchMovies ~ error',
        error
      );
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      {list?.length > 0 ? (
        <ul>
          {list.map((item) => (
            <ListItem key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <h2>Not found</h2>
      )}
    </>
  );
};

export default List;
