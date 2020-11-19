import React from 'react'
import {Button,Form,Row,Col} from 'react-bootstrap'

class Commentsarea extends React.Component{
    state = {
        comments:'',
        rate:''
    }
    UpdateComments = (e)=>{
        SubmitComments = async(e)=>{
            try {
                let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/id", {
                  // our POST request is made with the fetch method as well!
                  method: "GET", // declaring the CRUD method
                  body: JSON.stringify, // we need to stringify the JS object in order to send it
                  headers: new Headers({
                    // we need also to declare the content type
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2ODZiNjk4MzViMDAwMTc1ODRmMWUiLCJpYXQiOjE2MDU3OTc1NTgsImV4cCI6MTYwNzAwNzE1OH0.osGaxZDgWhiLrsfKqzDEkTZM74SuU7jCPs6M3ThEGFk"
                  }),
                });
      
                if (response.ok) {
                  // checking the ok property which stores the successful result of the operation
                  alert("Event created successfully");
                } else {
                  alert("Something went wrong!");
                }
              } catch (error) {
                console.log(error);
              }
            };
           
    render(){
      return(
        <Form classname = "w-100 mb-5" OnSubmit = {this.SubmitComments} >
            <Row>
                <Col md={6}>
        <Form.Group>
    <Form.Label>Comments</Form.Label>
    <Form.Control type="text" placeholder="comments" id= "comments"
    value = {this.state.comments.Comments}
    onchange = {this.UpdateComments}/>
    </Form.Group>
    </Col>
    </Row>
    <Button type = "submit">Submit</Button> 
</Form>)
}
}
}
export default Comment

