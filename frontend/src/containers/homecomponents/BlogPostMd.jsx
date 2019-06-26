import React from 'react'
import { Container } from 'reactstrap'
import './BlogPostMd.css'

function BlogPostMd(props) {
    let month = props.date.slice(5,7)
    let day = props.date.slice(8,10)
    let year = props.date.slice(0,4)
    let NewDate = `${month}.${day}.${year}`

    let styles = {
        backgroundImage: `url(${props.header_image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'none'
    }

    let fontStyle = {
        fontSize: ''
    }
    if (props.title.length <= 24) {
        fontStyle.fontSize = '2rem'
    }
    if (props.title.length >= 25) {
        fontStyle.fontSize = '1.75rem'
    }

    return (
        <a href={`/post/${props.slug}`} style={{ textDecoration: 'none', color: 'black' }}>
            <Container className="BlogPostMd">
                <div className="BlogPostMdImage" style={styles}></div>
                <div className="BlogPostMdTitle" style={fontStyle}>{props.title}</div>
            </Container>
        </a>
    )
}

export default BlogPostMd