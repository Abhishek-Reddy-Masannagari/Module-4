import React from 'react'
import {Container,Row,Col,Card,Button} from 'react-bootstrap'

let allBooks ={
  fantasy : require('../data/fantasy.json'),
  history : require('../data/history.json'),
  horror : require('../data/horror.json'),
  romance : require('../data/romance.json'),
  scifi : require('../data/scifi.json')
}

class Singlebook extends React.Component{
  state = {
    category : 'fantasy',
    books : allBooks.fantasy.slice(0,12)
  }
  componentDidMount = async() =>{
    let response = await fetch(' https://striveschool.herokuapp.com/api/comments/',{
      method :'GET',
      headers : new Headers({
        'Authorization':  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2ODZiNjk4MzViMDAwMTc1ODRmMWUiLCJpYXQiOjE2MDU3OTc1NTgsImV4cCI6MTYwNzAwNzE1OH0.osGaxZDgWhiLrsfKqzDEkTZM74SuU7jCPs6M3ThEGFk",
        // 'Content-type': "application/json"
      })
    })
    let comments = await response.json()
    console.log(comments)
   }
    render(){
        return(
          <Container>
          <Row >
           {this.state.books.map(book =>{
             return(
               <Col xs={3}>
                 <Card className='mt-3' >
                   <Card.Img variant="top" src={book.img} style={{ height: '15rem' }}/>
                   <Card.Body>
                     <Card.Title>{book.title}</Card.Title>
                     <Card.Text>
                       <p>Price :{book.price} $</p>
                     </Card.Text>
                     <Button variant="primary">Buy</Button>
                   </Card.Body>
                 </Card>
               </Col>
             )
           })}
         </Row>
         
        </Container>)
    }
}
export default Singlebook