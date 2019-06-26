import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import SideLinks from '../writeforuscomponents/SideLinks'
import './ContentContainer.css'

function ContentContainer(props) {
    return (
        <Container fluid className="ContentContainerPosts">
                <Row>
                    <Col className="FaqHero"></Col>
                </Row>
                <Row className="ContentRow">
                    <Col md={{offset: '1', size: '7'}}>
                        <div className="FaqContainer">
                            <h1>FREQUENTLY ASKED QUESTIONS</h1>
                            <h2>What is Scribbler, Ink.?</h2>
                            <p>Scribbler, Ink. is a digital magazine featuring content writers care about.<br/>
                                It's part entertainment, part news, and 100% awesome.
                            </p>
                            <h2>When did Scribbler, Ink. launch?</h2>
                            <p>Scribbler, Ink. launched in June 2019.</p>
                            <h2>Who is behind Scribbler, Ink.?</h2>
                            <p>Scribbler, Ink. is a branch of Scribble, LLC, a global company catering to writers. Scribbler launched as a <a href="https://www.goscribbler.com/subscribe/1352503911_Scribbler+Box+Subscription">subscription box</a> for novelists, and today sends thousands of boxes across the world each month. Scribbler, LLC also operates an e-commerce store with <a href="https://www.goscribbler.com/shop/all/">gifts for writers</a>, and a newsletter for writers called <a href="https://www.goscribbler.com/newsletter">Scribbler VI</a>.<br/><br/>
                                Scribbler, LLC was formed in 2017 by authors Victoria Scott and Lindsay Cummings.<br/>
                                Today it is run by a team of writers and dreamers.
                            </p>
                            <h2>Can I write for Scribbler, Ink.?</h2>
                            <p>If you have a story idea, we'd love to hear it! Read up on how to pitch us on our <a href="/write-for-us">Write For Us</a> page.</p>
                            <h2>Does Scribbler, Ink. pay its writers?</h2>
                            <p>We sure do! Because we are a company for writers, we believe in compensating writers for their time and work. We currently pay $0.10 per word for any published piece.</p>
                            <h2>How often do you publish stories?</h2>
                            <p>We publish stories once a week on average.</p>
                            <h2>How can I subscribe to updates?</h2>
                            <p>The best way to find out about recent posts is to subscribe to our newsletter, Scribbler VI., where we feature the best of Scribbler, Ink.</p>
                            <h2>What kind of writers does Scribbler, Ink. publish material for?</h2>
                            <p>We focus on novelists, but we also post stories relevant to screenwriters, poets, music writers, and nonfiction writers.</p>
                        </div>
                    </Col>
                    <SideLinks decodeEntities={props.decodeEntities} news_status={props.news_status} updateEmail={props.updateEmail} postData={props.postData} loading={props.loading} posts={props.posts}/>
                </Row>
            </Container>
    )
}

export default ContentContainer