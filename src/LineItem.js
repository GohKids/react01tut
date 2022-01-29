import React from 'react';
import styled from 'styled-components';
import { BiDotsVertical, BiXCircle } from "react-icons/bi";

const LineItem = (props) => {
  const { ele, handleCheckbox, handleDelect } = props;
  return (
    <Li>
      <BiDotsVertical />
      <input id={'inputCheck'+ele.id} type="checkbox" checked={ele.checked} onChange={() => handleCheckbox(ele.id)} />
      <label htmlFor={'inputCheck'+ele.id}>{ele.textItem}</label>
      <BiXCircle onClick={() => handleDelect(ele.id)} role="button" tabIndex="0" aria-label='Delect' />
    </Li>
  )
};

const Li = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 6px 0;
  
  label {
    width: 200px;
  }
`;

export default LineItem;
