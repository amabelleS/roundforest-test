import React from 'react';

import './ListItem';

const ListItem = ({ item }) => {
  const { title, id, userId, body } = item;
  return <li className="item">{title}</li>;
};

export default ListItem;
