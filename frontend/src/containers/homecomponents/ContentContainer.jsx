import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import BlogPostBig from './BlogPostBig'
import BlogPostMd from './BlogPostMd'
import BlogPostSmall from './BlogPostSmall'
import BlogPostSide from './BlogPostSide'
import SideLinks from './SideLinks'
import BlackButton1 from '../assets/img/buttons/Black_Button_1.png'
import BlackButton2 from '../assets/img/buttons/Black_Button_2.png'
import BlackButton3 from '../assets/img/buttons/Black_Button_3.png'
import OrangeButton1 from '../assets/img/buttons/Orange_Button_1.png'
import OrangeButton2 from '../assets/img/buttons/Orange_Button_2.png'
import OrangeButton3 from '../assets/img/buttons/Orange_Button_3.png'
import './ContentContainer.css'

function ContentContainer(props) {
    let BlogPosts = []
    if (props.posts_page === 1) BlogPosts = props.posts.slice(0,12)
    if (props.posts_page === 2) BlogPosts = props.posts.slice(12,24)
    if (props.posts_page === 3) BlogPosts = props.posts.slice(24,36)

    let BlogPostsBig = BlogPosts.slice(0,4).map(post => {
        return (
            <Col key={post.id} md="6">
                <BlogPostBig slug={post.slug} date={post.date} header_image={post.acf.header_image} title={post.title.rendered} preview={post.acf.post_preview}/>
            </Col>
        )
    })

    let BlogPostsMd = BlogPosts.slice(4,8).map(post => {
        return (
            <Col key={post.id} md="6">
                <BlogPostMd slug={post.slug} date={post.date} header_image={post.acf.header_image} title={post.title.rendered}/>
            </Col>
        )
    })

    let BlogPostsSmall = BlogPosts.slice(8,12).map(post => {
        return (
            <Col key={post.id} md="6">
                <BlogPostSmall slug={post.slug} header_image={post.acf.header_image} title={post.title.rendered}/>
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
                        <img alt="" src={(props.posts_page === 1) ? OrangeButton1 : BlackButton1} onClick={props.changePostsPage.bind(this, 1)}/>
                        <img alt="" src={(props.posts_page === 2) ? OrangeButton2 : BlackButton2} onClick={props.changePostsPage.bind(this, 2)}/>
                    </div>
                </Col>
            )
        }
        if (props.posts.length >= 24) {
            return (
                <Col md="12">
                    <div className="BlogPostsButtons">
                        <img alt="" src={(props.posts_page === 1) ? OrangeButton1 : BlackButton1} onClick={props.changePostsPage.bind(this, 1)}/>
                        <img alt="" src={(props.posts_page === 2) ? OrangeButton2 : BlackButton2} onClick={props.changePostsPage.bind(this, 2)}/>
                        <img alt="" src={(props.posts_page === 3) ? OrangeButton3 : BlackButton3} onClick={props.changePostsPage.bind(this, 3)}/>
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
                <SideLinks news_status={props.news_status} updateEmail={props.updateEmail} postData={props.postData} loading={props.loading} posts={props.posts}/>
            </Row>
        </Container>
    )
}

export default ContentContainer