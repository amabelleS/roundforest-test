import React from 'react';

import './ListItem';

const ListItem = ({ item }) => {
  const { title, id, userId, body, name } = item;
  return (
    <li className="item">
      <div>
        <h3>{name}</h3>
        <h4>{title}</h4>
      </div>
      <span>{body}</span>
    </li>
  );
};

export default ListItem;
