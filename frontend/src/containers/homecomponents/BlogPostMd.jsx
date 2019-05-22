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
        backgroundRepeat: 'none'
    }

    return (
        <Container className="BlogPostMd">
            <div className="BlogPostMdDate">
                {NewDate}
            </div>
            <div className="BlogPostMdImage" style={styles}></div>
            <div className="BlogPostMdTitle">{props.title}</div>
        </Container>
    )
}

export default BlogPostMd