import { Component } from "react";
import { Carousel, Row, Col } from 'react-bootstrap'


class MyCarosel extends Component {
    // state = {
    //     Lungometraggio: [],
    //     Lungometraggio2: [],
    //     Lungometraggio3: []
    // };

    
    render() {
        return (
            <>
                <Carousel className="mb-5">
                    <Carousel.Item>
                        <Row className="Justify-content-center">
                                <Col key={this.props.key}>
                                    <img width='140px' src={this.props.src} alt={this.props.alt} />
                                </Col>


                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="Justify-content-center">
                                <Col key={this.props.key2}>
                                    <img width='140px' src={this.props.src2} alt={this.props.alt2} />
                                </Col>


                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="Justify-content-center">
                                <Col key={this.props.key3}>
                                    <img width='140px' src={this.props.src3} alt={this.props.alt3} />
                                </Col>
                                

                        </Row>
                    </Carousel.Item>
                </Carousel>
            </>
        )
    }
}

export default MyCarosel;
// async componentDidMount() {
//     try {
//         const response = await fetch("http://www.omdbapi.com/?apikey=76941a40&s=harry%20potter%22")

//         if (response.ok) {
//             const data = await response.json();
//             this.setState({ Lungometraggio: data.Search });
//         } else {
//             console.log("error");
//         }
//     } catch (error) {
//         alert(error);
//     }
//     try {
//         const response = await fetch("http://www.omdbapi.com/?apikey=76941a40&s=avengers")

//         if (response.ok) {
//             const data = await response.json();
//             this.setState({ Lungometraggio2: data.Search });
//         } else {
//             console.log("error");
//         }
//     } catch (error) {
//         alert(error);
//     }
//     try {
//         const response = await fetch("http://www.omdbapi.com/?apikey=76941a40&s=grey's+anatomy")

//         if (response.ok) {
//             const data = await response.json();
//             this.setState({ Lungometraggio3: data.Search });
//         } else {
//             console.log("error");
//         }
//     } catch (error) {
//         alert(error);
//     }
// }