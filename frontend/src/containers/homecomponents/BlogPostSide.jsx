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
        fontStyle.fontSize = '1.75rem'
    }
    if (props.title.length >= 17) {
        fontStyle.fontSize = '1.25rem'
    }

    return (
        <Container fluid className="BlogPostSide">
            <Row>
            <Col md="4">
                    <a href={`/post/${props.slug}`} style={{ textDecoration: 'none' }}>
                        <div className="BlogPostSideImage" style={styles}></div>
                    </a>
                    </Col>
                    <Col className="BlogPostSideTitleContainer">
                        <a href={`/post/${props.slug}`} style={{ textDecoration: 'none' }}>
                        <div className="BlogPostSideTitle" style={fontStyle}>{props.title}</div>
                        </a>
                    </Col>
            </Row>
        </Container>
    )
}

export default BlogPostSide