import React from 'react';
import styled from 'styled-components';

function Footer(props) {
  const { date } = props;
  return (
    <div>
      <FooterContainer>
        <Copyrigth>Copyrigth &copy; 2022 {date.toString()}</Copyrigth>
      </FooterContainer>
    </div>
  )
}

const FooterContainer = styled.div`
  background-color: #F6F2D4;
  padding: 15px 0;
`;
const Copyrigth = styled.p`
  color: #22577E;
`;

export default Footer;
