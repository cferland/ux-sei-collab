import React from 'react'

const MenuItem = (props) => {
  return (
    <div className="menuitem">
      <div className="menuitem-title-and-price">
        <p3>{props.title}</p3>
        <p3>{props.price}</p3>
      </div>
      <div>
        <p4 className="menuitem-description">{props.description}</p4>
      </div>
    </div>
  )
}

export default MenuItem