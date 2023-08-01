import { Component } from "react";
import history from "../data/history.json";
import romance from "../data/romance.json";
import fantasy from "../data/fantasy.json";
import horror from "../data/horror.json";
import scifi from "../data/scifi.json";
import { Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";

class AllTheBooks extends Component {
    state = {
        selected : false,
        search : null,
        book : [
            ...history,
            ...romance,
            ...fantasy,
            ...horror,
            ...scifi
        ]
    }
    
    render() {
    return (
        <Row className="justify-content-center mt-4">
            <Col xs = '8'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicBook">
                        <Form.Label>Your Book</Form.Label>
                        <Form.Control type="text" placeholder="Enter your Book" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                </Form>
            </Col>
            <Col xs='10'>
                <Row>
            {history.map((param) => (
            <SingleBook src = {param.img} alt = {param.title} title = {param.title} category = {param.category} asin = {param.asin} price = {param.price} Key = {param.asin}/>
            ))}
                </Row>
            </Col>
        </Row>
    );
}
}

export default AllTheBooks;
