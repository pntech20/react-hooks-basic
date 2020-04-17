import React, { useState } from 'react';
import './ColorBox.scss';

ColorBox.propTypes = {

};

function getRandomColor() {
  const COLOR_LIST = ['green', 'orange', 'yellow', 'red', 'blue'];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}

function ColorBox() {

  const [color, setColor] = useState(() => {
    // use callback if the initial state is got from a function => prevent multiple render of that function
    const initialColor = localStorage.getItem('color_box') || 'green';
    return initialColor;
  });

  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor)

    localStorage.setItem('color_box', newColor)
  }

  return (
    <div
      className='color-box'
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    >
      COLOR BOX
    </div>
  );
}

export default ColorBox;