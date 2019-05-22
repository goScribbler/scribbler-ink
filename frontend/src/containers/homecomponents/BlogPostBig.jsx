import React from 'react'
import { Container } from 'reactstrap'
import './BlogPostBig.css'

function BlogPostBig(props) {
    let month = props.date.slice(5,7)
    let day = props.date.slice(8,10)
    let year = props.date.slice(0,4)
    let NewDate = `${month}.${day}.${year}`

    let styles = {
        backgroundImage: `url(${props.header_image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'none'
    }

    let fontStyle = {
        fontSize: ''
    }
    if (props.title.length <= 24) {
        fontStyle.fontSize = '2.5rem'
    }
    if (props.title.length >= 25) {
        fontStyle.fontSize = '2rem'
    }

    return (
        <Container className="BlogPostBig">
            <div className="BlogPostBigDate">
                {NewDate}
            </div>
            <div className="BlogPostBigImage" style={styles}></div>
            <div className="BlogPostBigTitle" style={fontStyle}>{props.title}</div>
            <div className="BlogPostBigPreview">{props.preview}</div>
            <div className="BlogPostBigLink"><a href="#">READ MORE</a></div>

        </Container>
    )
}

export default BlogPostBig