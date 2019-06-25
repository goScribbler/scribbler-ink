import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import SideLinks from '../writeforuscomponents/SideLinks'
import Idea from '../assets/img/WFU_idea.png'
import './ContentContainer.css'

function ContentContainer(props) {
    return (
        <Container fluid className="ContentContainerPosts">
                <Row>
                    <Col className="FaqHero"></Col>
                </Row>
                <Row>
                    <Col md={{offset: '1', size: '7'}}>
                        <div className="FaqContainer">
                            <h1>WRITE FOR SCRIBBLER, INK.</h1>
                            <h2>WHY WRITE FOR US</h2>
                            <ul>
                                <li>
                                    We have an audience of 7,500 newsletter subscribers and 20,000 social media followers.
                                </li>
                                <li>
                                    We pay $0.10 per word.
                                </li>
                                <li>
                                    Your bio, headshot, and a personal link of your choice will be published alongside your article.
                                </li>
                            </ul>
                            <h2>WHAT WE'RE LOOKING FOR</h2>
                            <ul>
                                <li>
                                    Non-fiction pieces between 400-1,000 words that are relevant to the writing and/or publishing community.
                                </li>
                                <li>
                                    When pitching, we accept fully written articles (preferred), partial drafts, or short pitches (a few paragraphs summarizing your story idea and why it matters to our readers). Please also send any samples of your writing
                                </li>
                                <li>
                                    Original content only. We do not publish anything that has been published elsewhere (including a personal blog.)
                                </li>
                                <li>
                                Authors who utilize a funny, divisive, or confident voice. (We never publish snoozy pieces!)
                                </li>
                                <li>
                                    Authors who either: 
                                    <ul className="SubList">
                                        <li>
                                            Take a strong stand on a topic. (ex. Using ghostwriters.)
                                        </li>
                                        <li>
                                            Have compiled relevant data our readers want. (ex. Library circulation is down, and here's why it matters to writers.)
                                        </li>
                                        <li>
                                            Offer unique experiences. (ex. Attending a writing conference alone.)
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <h2>HOW TO SUBMIT</h2>
                            <p><a href="mailto:hello@goscribbler.com">Email us</a> your submission. We prefer submissions as Google documents so that editors can provide feedback and guidance within your draft, but we'll accept oher formats. Please do not include photos with your submission, though we may ask for them later, if relevant.</p>
                            <h2>WHAT HAPPENS NEXT</h2>
                            <ul>
                                <li>
                                    An editor will review your submission and determine whether it's a potential fit.
                                </li>
                                <li>
                                    If accepted, you'll work closely with a Scribbler, Ink. editor to ensure your piece is ready to be published. (We rarely accept articles as is.)
                                </li>
                                <li>
                                    We'll schedule you for publication as soon as revisions are complete.
                                </li>
                                <li>
                                    We'll remit payment within 30 days post-publication.
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <SideLinks news_status={props.news_status} updateEmail={props.updateEmail} postData={props.postData} loading={props.loading} posts={props.posts}/>
                </Row>
            </Container>
    )
}

export default ContentContainer