import React from 'react';
import styled from 'styled-components';
import ItemsList from './ItemsList';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function Content(props) {
  const {name,count,item,newItem,setNewItem,randomName,countClick,handleClick1,handleClick2,handleCheckbox,handleDelect,handleSubmit,listSearch,setListSearch} = props;
  return (
    <div style={{padding:'20px 0'}}>
      <TitleName>Hi {name + " " + count}</TitleName>
      <Button onClick={randomName}>Random Name</Button>
      <Button onClick={countClick}>Increase</Button>
      <Button onClick={() => handleClick1('Jone')}>Click handleClick1</Button>
      <Button onClick={handleClick2}>Click handleClick2</Button>
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
      <SearchItem listSearch={listSearch} setListSearch={setListSearch} />
      <ItemsList item={item} handleCheckbox={handleCheckbox} handleDelect={handleDelect} />
      {/* {statusSearch ? (
        <ItemsList item={listSearch} handleCheckbox={handleCheckbox} handleDelect={handleDelect} />
      ) : (
        <ItemsList item={item} handleCheckbox={handleCheckbox} handleDelect={handleDelect} />
      )} */}
    </div>
  )
}

const Button = styled.button`
  font-family: 'Mitr', sans-serif;
  background-color: #5584AC;
  color: #F6F2D4;
  border: none;
  & + & {
    margin-left: 20px;
  }
`;

const TitleName = styled.h2`
  color: #22577E;
  font-size: 36px;
  font-weight: 300;
`;

export default Content;
