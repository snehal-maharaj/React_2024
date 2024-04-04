import React, { useState } from 'react'

export default function BgChanger() {

  const allColors =
    [
      { name: 'Red', value: '#F83939' },
      { name: 'Green', value: '#415F41' },
      { name: 'Pink', value: '#DB7093' },
      { name: 'Blue', value: '#1E4267' },
      { name: 'Black', value: '#2E2E2E' },
      { name: 'Yellow', value: '#EDC423' },
    ]

  const [activeColor, setActiveColor] = useState("#F83939");

  const handleButtonClick = (colorValue) => {
    setActiveColor(colorValue);
    // console.log(colorName,"colorName")
    // console.log(colorValue,"colorValue")
    // console.log(textColor,"textColor")
    // You can perform additional logic using colorName or colorValue
  };

  return (
    <>
      <div className='full-width-div' style={{ backgroundColor: activeColor }}>
      </div>
      <div className='all-fiexed-buttons'>
        <div className='fixed-buttons'>
          {allColors.map((color) => (
            <button
              className='btn'
              key={color.value}
              onClick={() => handleButtonClick(color.value)}
              style=
              {{
                backgroundColor: color.value === activeColor ? 'white' : color.value,
                color: color.value === activeColor ? color.value : 'black',
                border: color.value === activeColor ? `2px solid ${color.value}` : 'none'
              }}
            >
              {color.name}
            </button>
          ))}
          {/* <button onClick={() => setColor("rgb(248, 57, 57)")} className='btn red-btn'>Red</button> */}
          {/* <button onClick={() => setColor("rgb(65, 95, 65)")}  className='btn green-btn'>Green</button> */}
          {/* <button className='btn red-btn'>Red</button>
        <button className='btn green-btn'>Green</button>
        <button className='btn pink-btn'>Pink</button>
        <button className='btn blue-btn'>Blue</button>
        <button className='btn black-btn'>Black</button>
        <button className='btn yellow-btn'>Black</button> */}
        </div>
      </div>
    </>
  )
}
