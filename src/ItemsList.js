import React from 'react';
import LineItem from './LineItem';

const ItemsList = (props) => {
  const {item, handleCheckbox, handleDelect} = props;
  return (
    <div>
      { item.length ? (
        <ul>
          {item.map(ele => (
            <LineItem key={ele.id} ele={ele} handleCheckbox={handleCheckbox} handleDelect={handleDelect} />
          ))}
        </ul>
      ) : (
        <p>No item lists</p>
      )}
    </div>
  )
};

export default ItemsList;
