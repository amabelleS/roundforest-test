import React from 'react';

import './ListItem';

const ListItem = ({ item }) => {
  const { title, id, userId, body } = item;
  return (
    <li className="item">
      <h4>{title}</h4>
      <span>{body}</span>
    </li>
  );
};

export default ListItem;
