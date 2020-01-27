import React from 'react'

const MenuItem = (props) => {
  return (
    <div className="menuitem">
      <div className="menuitem-title-and-price">
        <p className="p3">{props.title}</p>
        <p className="p3">{props.price}</p>
      </div>
      <div>
        <p className="p4 menuitem-description">{props.description}</p>
      </div>
    </div>
  )
}

export default MenuItem