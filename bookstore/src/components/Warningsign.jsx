import React from 'react'
import {Alert} from 'react-bootstrap'

const Warningsign = (props)=>{
    return(
        <Alert  variant='danger'>
            {props.title}
  </Alert>
    )
}
export default Warningsign
