import React from 'react';
import './ProjectChallenge.css';

const ProjectChallenge = (props) => {
  const { color, setColor, isBlackText, setIsBlackText } = props;
  // console.log(isBlackText)
  // if (color === 'black' || color === '#000' || color === '#000000') {
  //   setIsBlackText(true);
  // } else {
  //   setIsBlackText(false);
  // }
  return (
    <div>
      <div className='magic-box-color' style={{backgroundColor: color}}>
        {color.length ? (
          <p style={{color: isBlackText ? '#fff' : '#000'}}>{color}</p>
        ) : (
          <p>Empty Value</p>
        )}
      </div>
      <input autoFocus type="text" placeholder='add color name' value={color} onChange={(e) => setColor(e.target.value)} />
    </div>
  )
};

export default ProjectChallenge;
