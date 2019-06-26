import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Instagram from '../assets/img/instagram.png'
import Facebook from '../assets/img/facebook.png'
import Twitter from '../assets/img/twitter.png'
import SideLinks from './SideLinks'
import './ContentContainer.css'

function ContentContainer(props) {

     if (props.loading === true) {
        return (
            <Container fluid className="ContentContainerPosts">
                <Row>
                    <Col md="9" className="PostTitle">
                        
                    </Col>
                </Row>
                <Row>
                    <Col md="9">
                        
                    </Col>
                    <SideLinks news_status={props.news_status} updateEmail={props.updateEmail} postData={props.postData} loading={props.loading} posts={props.posts}/>
                </Row>
            </Container>
        )
    } else if (props.active_post === undefined) {
        return (
            <Container fluid className="ContentContainerPosts">
                <Row>
                    <Col md="9">
                        404 NOT FOUND
                    </Col>
                    <SideLinks news_status={props.news_status} updateEmail={props.updateEmail} postData={props.postData} loading={props.loading} posts={props.posts}/>
                </Row>
            </Container>
        )
    } 
    else if (props.active_post !== undefined) {
        function createPrevPost() {
            if (props.prev_post === undefined) {
                return null
            } else {
                let PrevPostTitle = props.decodeEntities(props.prev_post.title.rendered)
                let PrevImage = {
                    backgroundImage: `url(${props.prev_post.acf.preview_image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center'
                }
                return(
                    <Col className="PrevPost" md={{size: '4', offset: '1'}}>
                        <a href={`/post/${props.prev_post.slug}`} style={{ textDecoration: 'none' }}>
                            <span>PREVIOUS POST</span>
                            <Container fluid className="BlogPostSide">
                                <Row>
                                    <Col md="4">
                                        <div className="BlogPostSideImage" style={PrevImage}></div>
                                    </Col>
                                    <Col className="BlogPostSideTitleContainer">
                                        <div className="BlogPostSideTitle" style={fontStylePrev}>{PrevPostTitle}</div>
                                    </Col>
                                </Row>
                            </Container>
                        </a>    
                    </Col>
                )
            }
        }

        function createNextPost() {
            if (props.next_post === undefined) {
                return null
            } else {
                let NextPostTitle = props.decodeEntities(props.next_post.title.rendered)

                let NextImage = {
                    backgroundImage: `url(${props.next_post.acf.preview_image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center'
                }
                return(
                    <Col className="NextPost" md={{size: '4', offset: '2'}}>
                        <a href={`/post/${props.next_post.slug}`} style={{ textDecoration: 'none' }}>
                            <span>NEXT POST</span>
                            <Container fluid className="BlogPostSide">
                                <Row>
                                    <Col md="4">
                                        <div className="BlogPostSideImage" style={NextImage}></div>
                                    </Col>
                                    <Col className="BlogPostSideTitleContainer">
                                        <div className="BlogPostSideTitle" style={fontStyleNext}>{NextPostTitle}</div>
                                    </Col>
                                </Row>
                            </Container>
                        </a>   
                    </Col>
                )
                
            }
        }

        let fontStyleTitle = {
            fontSize: ''
        }
        if (props.active_post.title.rendered.length <= 31) {
            fontStyleTitle.fontSize = '4rem'
        }
        if (props.active_post.title.rendered.length >= 32) {
            fontStyleTitle.fontSize = '3rem'
        }
        let fontStylePrev = {
            fontSize: ''
        }
        if (props.prev_post.title.rendered.length <= 31) {
            fontStylePrev.fontSize = '1.5rem'
        }
        if (props.active_post.title.rendered.length >= 32) {
            fontStylePrev.fontSize = '1rem'
        }
        let fontStyleNext = {
            fontSize: ''
        }
        if (props.prev_post.title.rendered.length <= 31) {
            fontStyleNext.fontSize = '1.5rem'
        }
        if (props.active_post.title.rendered.length >= 32) {
            fontStyleNext.fontSize = '1rem'
        }

        let month = props.active_post.date.slice(5,7)
        let day = props.active_post.date.slice(8,10)
        let year = props.active_post.date.slice(0,4)
        let NewDate = `${month}.${day}.${year}`

        let AuthorImage = {
            backgroundImage: `url(${props.active_post.acf.author_mugshot})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
        }

        let TileImage1 = {
            backgroundImage: `url(${props.active_post.acf.tile_image1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
        }

        let TileImage2 = {
            backgroundImage: `url(${props.active_post.acf.tile_image2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
        }

        let TileImage3 = {
            backgroundImage: `url(${props.active_post.acf.tile_image3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
        }

        let BlogPostTitle = props.decodeEntities(props.active_post.title.rendered)
        return (
            <Container fluid className="ContentContainerPosts">
                <Row>
                    <Col md="9" className="PostTitle">
                        <h1 style={fontStyleTitle}>{BlogPostTitle}</h1>
                        <h3 className="PostInfo">By {props.active_post.acf.author_name}, {NewDate}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md="9" className="PostMainContent">
                        <Container fluid>
                            <Row>
                                <Col className="PostImageSmall" style={TileImage1}/>
                                <Col className="PostImageSmall"  style={TileImage2}/>
                            </Row>
                            <Row>
                                <Col className="PostImageLarge" style={TileImage3}/>
                            </Row>
                            <Row>
                                <Col md={{size: "10", offset: "1"}} className="PostContent">
                                    <div className="PostContentRendered" dangerouslySetInnerHTML={{ __html: props.active_post.content.rendered}}/>
                                    <div className="PostShare">
                                        <span>SHARE</span><br/>
                                        <a href="https://www.instagram.com/goscribbler/">
                                            <img src={Instagram} alt="" className="SocialIcon"/>
                                        </a>
                                        <a href="https://www.facebook.com/goScribbler/">
                                            <img src={Facebook} alt="" className="SocialIcon"/>
                                        </a>
                                        <a href="https://twitter.com/goscribbler/">
                                            <img src={Twitter} alt="" className="SocialIcon"/>
                                        </a>
                                    </div>
                                    <br style={{clear: "both"}}/>
                                    <div className="AuthorContainer">
                                        <a  className="AuthorLink" href={props.active_post.acf.author_website}>
                                            <div className="AuthorInfo">
                                                <div className="AuthorImage" style={AuthorImage}>
                                                </div>
                                                <div className="AuthorName">
                                                    {props.active_post.acf.author_name}
                                                </div>
                                                <div className="AuthorBio">
                                                    {props.active_post.acf.author_bio}
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </Col>
                                {createPrevPost()}
                                {createNextPost()}
                            </Row>
                        </Container>
                    </Col>
                    <SideLinks decodeEntities={props.decodeEntities} news_status={props.news_status} updateEmail={props.updateEmail} postData={props.postData} loading={props.loading} posts={props.posts}/>
                </Row>
            </Container>
        )
    }
}

export default ContentContainer