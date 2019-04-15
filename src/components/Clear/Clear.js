import React from 'react'
import '../../App.css'


export default function Clear(props) {
    return (
        <div className="clear-btn" onClick={props.handleClear}>
    {props.children}
  </div>
    )
}