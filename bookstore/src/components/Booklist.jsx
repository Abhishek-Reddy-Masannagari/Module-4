import React from 'react'
import Singlebook from './Singlebook'
import {Container,Row,Col} from 'react-bootstrap'

class Booklist extends React.Component{
    state={
        books:this.props.Mybook
    }
    render(){
        return(
        <Container>
            <Row>
                {this.state.books.map((book)=>
                <Col>
                <Singlebook obj = {book}></Singlebook>
                </Col>
                )}
                </Row>
                </Container>)
    }
}
export default Booklist