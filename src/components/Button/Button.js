import React from 'react'
import '../../App.css'

const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
  };

export default function Button(props) {
    return (
        <div className={`button-wrapper ${
            isOperator(props.children) ? null : "operator"
          }`}
          onClick={() => props.handleClick(props.children)}
          >
            {props.children}
        </div>
    )
}