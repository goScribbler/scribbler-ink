import React from 'react'
import { Container, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap'
import './CarouselContainer.css'

function CarouselContainer(props) {

    const slides = props.items.map((item) => {
        return (
          <CarouselItem className="CarouselItem"
            onExiting={props.onExiting}
            onExited={props.onExited}
            key={item.src}
          >
            <img src={item.src} alt={item.altText}/>
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
    });

    return (
        <Container fluid className="CarouselContainer">
            <Carousel className="Carousel"
                activeIndex={props.carousel_index}
                next={props.next}
                previous={props.previous}
            >
                <CarouselIndicators items={props.items} carousel_index={props.carousel_index} onClickHandler={props.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={props.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={props.next} />
            </Carousel>
        </Container>
    )
}

export default CarouselContainer