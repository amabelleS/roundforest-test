import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';
import SearchIcon from './search.svg';

import './List.css';

const List = () => {
  const [list, setList] = useState([]);
  const [names, setNames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  const API_URL = 'https://jsonplaceholder.typicode.com/posts';

  const fetchList = async () => {
    try {
      const response = await fetch(`${API_URL}`);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      console.log('🚀 ~ file: List.js ~ line 15 ~ fetchList ~ data', data);

      const postsWithNames = data.map((post) => {
        return {
          ...post,
          name: findNameById(post.userId),
        };
      });
      console.log(
        '🚀 ~ file: List.js ~ line 29 ~ postsWithNames ~ postsWithNames',
        postsWithNames
      );

      setList(postsWithNames);
    } catch (error) {
      console.log(
        '🚀 ~ file: MoviesList.jsx ~ line 27 ~ searchMovies ~ error',
        error
      );
    }
  };

  const findNameById = (id) => {
    const user = names?.filter((user) => id === user.id);
    // console.log('🚀 ~ file: List.js ~ line 45 ~ findNameById ~ user', user);
    return user[0].name;
  };

  const fetchNames = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      );
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      // console.log('🚀 ~ file: List.js ~ line 40 ~ fetchList ~ data', data);

      setNames(data);
    } catch (error) {
      console.log(
        '🚀 ~ file: MoviesList.jsx ~ line 27 ~ searchMovies ~ error',
        error
      );
    }
  };

  const searchPosts = (searchTerm) => {
    const filteredList = list.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.body.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filteredList);
  };

  useEffect(() => {
    fetchList();
    fetchNames();
  }, []);

  useEffect(() => {
    if (list) {
      searchPosts(searchTerm);
    }
  }, [searchTerm]);

  return (
    <>
      <div className="search">
        <input
          value={searchTerm}
          type="search"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for posts"
          onKeyDown={(e) => e.key === 'Enter' && searchPosts(searchTerm)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchPosts(searchTerm)}
        />
      </div>
      {list?.length > 0 ? (
        <ul>
          {(filteredPosts?.length > 0 ? filteredPosts : list).map((item) => (
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
