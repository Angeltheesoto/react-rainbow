import React from 'react'

function ColorBlock(props) {
 return (
  <div className="colorBlock"
  style={{'backgroundColor': props.color, 'height': '1rem', 'width': '100%'}}
  >
   <p>{props.color}</p>
  </div>
 )
}

export default ColorBlock