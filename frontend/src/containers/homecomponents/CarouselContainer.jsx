import React from 'react'
import { Container } from 'reactstrap'
import './CarouselContainer.css'

function CarouselContainer(props) {
    if (props.loading === false) {
        let BlogPostTitle = props.decodeEntities(props.posts[props.carousel_index].title.rendered)

        const styles = {
            backgroundImage: `url(${props.posts[props.carousel_index].acf.carousel_image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'none',
        }

        return (
            <Container fluid className="CarouselContainer">
                <a href={`/post/${props.posts[props.carousel_index].slug}`}>
                    <div className="Slide" style={styles}>
                        <div className="SlideContent">
                            <div className="SlideTitle">{BlogPostTitle}</div>
                            <div className="CarouselIndicators">
                                <span id="carousel0" onClick={props.changeCarouselIndex.bind(this, 0)}>●</span>
                                <span id="carousel1" onClick={props.changeCarouselIndex.bind(this, 1)}>○</span>
                                <span id="carousel2" onClick={props.changeCarouselIndex.bind(this, 2)}>○</span>
                                <span id="carousel3" onClick={props.changeCarouselIndex.bind(this, 3)}>○</span>
                                <span id="carousel4" onClick={props.changeCarouselIndex.bind(this, 4)}>○</span>
                            </div>
                        </div>
                    </div>
                </a>
            </Container>
        )
    } else return (
        <Container fluid className="LoadingContainer">
            LOADING
        </Container>
    )
}

export default CarouselContainer