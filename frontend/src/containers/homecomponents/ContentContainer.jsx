import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import BlogPostBig from './BlogPostBig'
import BlogPostMd from './BlogPostMd'
import BlogPostSmall from './BlogPostSmall'
import './ContentContainer.css'

function ContentContainer(props) {
    let BlogPosts = []
    if (props.posts_page === 1) BlogPosts = props.posts.slice(0,12)
    if (props.posts_page === 2) BlogPosts = props.posts.slice(12,24)
    if (props.posts_page === 3) BlogPosts = props.posts.slice(24,36)

    let BlogPostsBig = BlogPosts.slice(0,4).map(post => {
        return (
            <Col md="6">
                <BlogPostBig date={post.date} header_image={post.acf.header_image} title={post.title.rendered} preview={post.acf.post_preview}/>
            </Col>
        )
    })

    let BlogPostsMd = BlogPosts.slice(4,8).map(post => {
        return (
            <Col md="6">
                <BlogPostMd date={post.date} header_image={post.acf.header_image} title={post.title.rendered}/>
            </Col>
        )
    })

    let BlogPostsSmall = BlogPosts.slice(8,12).map(post => {
        return (
            <Col md="6">
                <BlogPostSmall header_image={post.acf.header_image} title={post.title.rendered}/>
            </Col>
        )
    })

    function checkButtons() {
        if (props.posts.length < 13) {
            return (
                <div></div>
            )
        }
        if (props.posts.length >= 13 && props.posts.length < 25) {
            return (
                <Col md="12">
                    <div className="BlogPostsButtons">
                        <button onClick={props.changePostsPage.bind(this, 1)}>1</button>
                        <button onClick={props.changePostsPage.bind(this, 2)}>2</button>
                    </div>
                </Col>
            )
        }
        if (props.posts.length >= 24) {
            return (
                <Col md="12">
                    <div className="BlogPostsButtons">
                        <button onClick={props.changePostsPage.bind(this, 1)}>1</button>
                        <button onClick={props.changePostsPage.bind(this, 2)}>2</button>
                        <button onClick={props.changePostsPage.bind(this, 3)}>3</button>
                    </div>
                </Col>
            )
        }
    }
    return (
        <Container fluid className="ContentContainer">
            <Row>
                <Col md="8" className="BlogPosts">
                    <Container fluid>
                        <Row>
                            {BlogPostsBig}
                            {BlogPostsMd}
                            {BlogPostsSmall}
                            {checkButtons()}
                        </Row>
                    </Container>
                </Col>
                <Col md="4" className="SideLinks">
                    <Container>
                        <Row>
                            <Col md='12'>
                                
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default ContentContainer