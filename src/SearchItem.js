import React from 'react';

const SearchItem = (props) => {
  const { listSearch,setListSearch } = props;
  return (
    <div>
      <input type="text" placeholder='search item' value={listSearch} onChange={(e) => {setListSearch(e.target.value)}} />
    </div>
  )
};

export default SearchItem;
