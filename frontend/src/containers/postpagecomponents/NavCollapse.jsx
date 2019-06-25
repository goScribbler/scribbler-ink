import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Instagram from '../assets/img/instagram.png'
import Facebook from '../assets/img/facebook.png'
import Twitter from '../assets/img/twitter.png'
import './NavCollapse.css'

function NavCollapse(props) {
    if (props.nav_collapsed === true) {
        return(null)
    } else {
        return (
            <Container className="NavCollapse">
                <Row className="NavCollapseCloseRow">
                    <Col sm={{ size: 12}} onClick={props.toggleNavbar} className="NavCollapseClose">
                        <span>×</span>
                    </Col>
                </Row>
                <Row className="NavCollapseSocialsRow">
                    <Col sm={{ size: 6, offset: 3}} className="NavCollapseSocials">
                        <a href="https://www.instagram.com/goscribbler/">
                            <img src={Instagram} alt="" className="SocialIcon"/></a>
                        <a href="https://www.facebook.com/goScribbler/">
                            <img src={Facebook} alt="" className="SocialIcon"/></a>
                        <a href="https://twitter.com/goscribbler/">
                            <img src={Twitter} alt="" className="SocialIcon"/></a>
                    </Col>
                </Row>
                <Row className="NavCollapseLinksRow">
                    <Col sm={{ size: 12 }} className="NavCollapseLinks"><a href="https://www.goscribbler.com/">HOME</a></Col>
                    <Col sm={{ size: 12 }} className="NavCollapseLinks"><a href="/write-for-us">WRITE FOR US</a></Col>
                    <Col sm={{ size: 12 }} className="NavCollapseLinks"><a href="https://www.goscribbler.com/shop/all/">SUBSCRIPTION BOX</a></Col>
                    <Col sm={{ size: 12 }} className="NavCollapseLinks"><a href="https://www.goscribbler.com/shop/all/">WRITER'S GIFTS</a></Col>
                    <Col sm={{ size: 12 }} className="NavCollapseLinks"><a href="/faq">FAQ</a></Col>
                    <Col sm={{ size: 12 }} className="NavCollapseLinks"><a href="mailto:hello@goscribbler.com">CONTACT</a></Col>
                </Row>
            </Container>
        )
    }
}

export default NavCollapse