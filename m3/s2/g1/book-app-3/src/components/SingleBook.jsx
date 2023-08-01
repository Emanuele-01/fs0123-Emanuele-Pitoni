import { Component } from "react";
import { Button, Card, Col } from 'react-bootstrap';
import CommentArea from "./CommentArea";

class SingleBook extends Component {
    state = {
        selected: false
    }
    handleChange = () => {
        this.setState({ selected: !this.state.selected });
    };

    render() {
        const cardColor = this.state.selected ? "border-3 border-danger " : "";
        return (
            <Col xs={3} className="mt-4">
                <Card className={cardColor} key={this.props.Key}>
                    <Card.Img className="h-50" variant="top" src={this.props.src} alt={this.props.alt} onClick={() => (this.handleChange())} />
                    <Card.Body className="d-flex flex-column">
                        <Card.Title><strong>{this.props.title}</strong></Card.Title>
                        <CommentArea id={this.props.id} />
                        <CommentArea />
                        <Card.Text className="mt-auto fs-4">{this.props.category} <p>{this.props.asin}</p> </Card.Text>
                        <Button className="mt-auto" variant="danger">{this.props.price} €</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default SingleBook;