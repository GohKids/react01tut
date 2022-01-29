import React from 'react';
import { useRef } from 'react';
import { BiPlusCircle } from 'react-icons/bi';

const AddItem = (props) => {
  const { newItem, setNewItem, handleSubmit } = props;
  const inputRef = useRef();
  return (
    <form style={{ marginTop: "30px" }} onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input ref={inputRef} autoFocus id="addItem" type="text" placeholder='add item' required value={newItem} onChange={(e) => setNewItem(e.target.value)} />
      <button aria-label='add' onClick={() => inputRef.current.focus()} type='submit'><BiPlusCircle /></button>
    </form>
  )
};

export default AddItem;
