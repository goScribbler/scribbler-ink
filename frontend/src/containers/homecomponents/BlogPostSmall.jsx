import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './BlogPostSmall.css'

function BlogPostSmall(props) {
    let styles = {
        backgroundImage: `url(${props.header_image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'none'
    }

    return (
        <Container className="BlogPostSmall">
            <Row>
                <Col md="2">
                    <div className="BlogPostSmallImage" style={styles}></div>
                </Col>
                <Col className="BlogPostSmallTitleContainer">
                    <div className="BlogPostSmallTitle">{props.title}</div>
                </Col>
            </Row>
        </Container>
    )
}

export default BlogPostSmall