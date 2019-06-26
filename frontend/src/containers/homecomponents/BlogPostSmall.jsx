import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './BlogPostSmall.css'

function BlogPostSmall(props) {
    let styles = {
        backgroundImage: `url(${props.header_image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'none'
    }

    let fontStyle = {
        fontSize: ''
    }
    if (props.title.length <= 24) {
        fontStyle.fontSize = '1.8rem'
    }
    if (props.title.length >= 25) {
        fontStyle.fontSize = '1.5rem'
    }

    return (
        <a href={`/post/${props.slug}`} style={{ textDecoration: 'none', color: 'black' }}>
            <Container className="BlogPostSmall">
                <Row>
                    <Col md="4">
                        <div className="BlogPostSmallImage" style={styles}></div>
                    </Col>
                    <Col className="BlogPostSmallTitleContainer">
                        <Container fluid>
                            <Row>
                                <Col>
                                    <div className="BlogPostSmallTitle" style={fontStyle}>{props.title}</div>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </a>
    )
}

export default BlogPostSmall