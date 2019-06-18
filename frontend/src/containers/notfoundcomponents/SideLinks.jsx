import React from 'react'
import { Col } from 'reactstrap'
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

function SideLinks(props) {

    let BlogPostsSide = props.posts.slice(0,3).map(post => {
        return (
            <BlogPostSide key={post.id} slug={post.slug} header_image={post.acf.header_image} title={post.title.rendered} date={post.date}/>
        )
    })

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
        <Col md="3" className="SideLinks">
            <img src={StayConnected} alt="" className="SideLinkHeader"/>
            <a rel="noopener noreferrer" href="https://www.instagram.com/goscribbler/">
                <div className="Instagram Social">
                    <img src={Instagram} alt=""/>
                    <span>Follow</span>
                </div>
            </a>
            <a rel="noopener noreferrer" href="https://www.facebook.com/goScribbler/">
                <div className="Facebook Social">
                    <img src={Facebook} alt=""/>
                    <span>Like</span>
                </div>
            </a>
            <a rel="noopener noreferrer" href="https://twitter.com/goscribbler">
                <div className="Twitter Social">
                    <img src={Twitter} alt=""/>
                    <span>Follow</span>
                </div>
            </a>
            <img src={SubscriptionBox} alt="" className="SideLinkHeader"/>
            <a rel="noopener noreferrer" href="https://www.goscribbler.com/subscribe/1352503911_Scribbler+Box+Subscription">
                <img src={SubscriptionBox2} alt="" className="SubBox"/>
            </a>
            <img src={Newsletter} alt="" className="SideLinkHeader"/>
            <img src={Newsletter2} alt="" className="Newsletter"/>
            <input type="text" name="email" id="email" onChange={props.updateEmail} className="NewsForm" placeholder="Email Address"/>
            <button className ="NewsButton" onClick={props.postData} style={NewsButtonStyles}>SUBSCRIBE {NewsButtonContent.content}</button>
            <img src={TopPosts} alt="" className="SideLinkHeader"/>
            {BlogPostsSide}
            <img src={WriterGifts} alt="" className="SideLinkHeader"/>
            <a rel="noopener noreferrer" href="https://www.goscribbler.com/shop/all/">
                <img src={WriterGifts2} alt="" className="WriterGifts"/>
            </a>
        </Col>
    )
}

export default SideLinks