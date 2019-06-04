import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './BlogPostSide.css'

function BlogPostSide(props) {
    let styles = {
        backgroundImage: `url(${props.header_image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'none'
    }

    let fontStyle = {
        fontSize: ''
    }
    if (props.title.length <= 16) {
        fontStyle.fontSize = '2.25rem'
    }
    if (props.title.length >= 17) {
        fontStyle.fontSize = '1.75rem'
    }

    return (
        <Container fluid className="BlogPostSide">
            <Row>
                <Col md="4">
                    <div className="BlogPostSideImage" style={styles}></div>
                </Col>
                <Col className="BlogPostSideTitleContainer">
                    <Container fluid>
                        <Row>
                            <Col>
                                <div className="BlogPostSideTitle" style={fontStyle}>{props.title}</div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default BlogPostSide