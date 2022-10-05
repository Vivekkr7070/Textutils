// import App from '../App'
import React from 'react'

export default function Alert(props) {
  return (
    
      props.alert &&
        // <div className="alert alert-success alert-dismissible fade show" role="alert">
        <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
  <strong> {props.alert.typ}</strong>:{props.alert.msg}
  {/* <strong> {props.alert}</strong>: */}  
  
</div>

  )

  // export default Alert;
}

