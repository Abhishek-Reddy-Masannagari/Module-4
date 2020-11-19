import React from 'react'
import {Badge,Button} from 'react-bootstrap'

const Mybadge = (props)=>{
    return(
        <Button variant="primary">
  Profile <Badge variant={props.color}>9</Badge>
  <span className="sr-only">{props.title}</span>
</Button>
    )
}
export default Mybadge