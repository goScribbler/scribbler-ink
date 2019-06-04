import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import BlogPostBig from './BlogPostBig'
import BlogPostMd from './BlogPostMd'
import BlogPostSmall from './BlogPostSmall'
import BlogPostSide from './BlogPostSide'
import Instagram from '../assets/img/instagram.png'
import Facebook from '../assets/img/facebook.png'
import Twitter from '../assets/img/twitter.png'
import StayConnected from '../assets/img/stayconnected.png'
import Newsletter from '../assets/img/newsletter.png'
import Newsletter2 from '../assets/img/newsletter2.png'
import SubscriptionBox from '../assets/img/subscriptionbox.png'
import SubscriptionBox2 from '../assets/img/subscription_box.png'
import TopPosts from '../assets/img/topposts.png'
import WriterGifts from '../assets/img/writergifts.png'
import WriterGifts2 from '../assets/img/writer_gift.png'
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

    let BlogPostsSide = props.posts.slice(0,3).map(post => {
        return (
            <BlogPostSide header_image={post.acf.header_image} title={post.title.rendered} date={post.date}/>
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
    let NewsButtonStyles = {
        backgroundColor: ''
    }
    if (props.news_status === 'success') {
        NewsButtonStyles.backgroundColor = '#4BB543'
    }
    if (props.news_status === 'failure') {
        NewsButtonStyles.backgroundColor = 'red'
    }

    let NewsButtonContent = {
        content: ''
    }
    if (props.news_status === 'success') {
        NewsButtonContent.content = "✅"
    }
    if (props.news_status === 'failure') {
        NewsButtonContent.content = "❌"
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
                    <img src={StayConnected} alt="" className="SideLinkHeader"/>
                    <a href="https://www.instagram.com/goscribbler/">
                        <div className="Instagram Social">
                            <img src={Instagram} alt=""/>
                            <a href="https://www.instagram.com/goscribbler/">Follow</a>
                        </div>
                    </a>
                    <a href="https://www.facebook.com/goScribbler/">
                        <div className="Facebook Social">
                            <img src={Facebook} alt=""/>
                            <a href="https://www.facebook.com/goScribbler/">Like</a>
                        </div>
                    </a>
                    <a href="https://twitter.com/goscribbler">
                        <div className="Twitter Social">
                            <img src={Twitter} alt=""/>
                            <a href="https://twitter.com/goscribbler">Follow</a>
                        </div>
                    </a>
                    <img src={SubscriptionBox} alt="" className="SideLinkHeader"/>
                    <a href="">
                        <img src={SubscriptionBox2} alt="" className="SubBox"/>
                    </a>
                    <img src={Newsletter} alt="" className="SideLinkHeader"/>
                    <img src={Newsletter2} alt="" className="Newsletter"/>
                    <input type="text" name="email" id="email" onChange={props.updateEmail} className="NewsForm" placeholder="Email Address"/>
                    <button className ="NewsButton" onClick={props.postData} style={NewsButtonStyles}>SUBSCRIBE {NewsButtonContent.content}</button>
                    <img src={TopPosts} alt="" className="SideLinkHeader"/>
                    {BlogPostsSide}
                    <img src={WriterGifts} alt="" className="SideLinkHeader"/>
                    <a href="https://www.goscribbler.com/shop/all/">
                        <img src={WriterGifts2} alt="" className="WriterGifts"/>
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default ContentContainer