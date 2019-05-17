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
                        <img src={Instagram} alt="" className="SocialIcon"/>
                        <img src={Facebook} alt="" className="SocialIcon"/>
                        <img src={Twitter} alt="" className="SocialIcon"/>
                    </Col>
                </Row>
                <Row className="NavCollapseLinksRow">
                    <Col sm={{ size: 12 }} className="NavCollapseLinks">HOME</Col>
                    <Col sm={{ size: 12 }} className="NavCollapseLinks">NEWSLETTER</Col>
                    <Col sm={{ size: 12 }} className="NavCollapseLinks">WRITE FOR US</Col>
                    <Col sm={{ size: 12 }} className="NavCollapseLinks">SUBSCRIPTION BOX</Col>
                    <Col sm={{ size: 12 }} className="NavCollapseLinks">WRITER GIFTS</Col>
                    <Col sm={{ size: 12 }} className="NavCollapseLinks">FAQ</Col>
                    <Col sm={{ size: 12 }} className="NavCollapseLinks">CONTACT</Col>
                </Row>
            </Container>
        )
    }
}

export default NavCollapse