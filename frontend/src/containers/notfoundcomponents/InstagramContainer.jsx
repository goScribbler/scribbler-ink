import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './InstagramContainer.css'

function InstagramContainer(props) {
    let InstagramTiles = props.instagram_posts.slice(0,12).map(post => {
        let styles = {
            backgroundImage: `url(${post.images.low_resolution.url})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'none'
        }

        return (
            <Col key={post.id} md="2" style={styles} className="InstagramTile">
            </Col>
        )
    })
    return (
        <Container fluid className="InstagramContainer">
            <a href="https://www.instagram.com/goscribbler/">
                <Row>
                    {InstagramTiles}
                </Row>
                <div className="InstagramButton">Follow @ Instagram</div>
            </a>
        </Container>
    )
}

export default InstagramContainer