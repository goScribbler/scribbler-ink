import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import SideLinks from './SideLinks'
import './ContentContainer.css'

function ContentContainer(props) {
    return (
        <Container fluid className="ContentContainerPosts">
                <Row>
                    <Col md="9" className="NotFoundContainer">
                        <div>
                            <h1>404</h1>
                            <h2>Page not found</h2>
                            <p>You might be here because the page has moved, no longer exists, or there is a mistake in the address. Try going back to the homepage!</p>
                        </div>
                    </Col>
                    <SideLinks decodeEntities={props.decodeEntities} news_status={props.news_status} updateEmail={props.updateEmail} postData={props.postData} loading={props.loading} posts={props.posts}/>
                </Row>
            </Container>
    )
}

export default ContentContainer