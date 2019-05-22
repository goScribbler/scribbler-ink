import React from 'react';
import NavbarContainer from './homecomponents/NavbarContainer'
import CarouselContainer from './homecomponents/CarouselContainer'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            posts: [],
            nav_collapsed: true,
            carousel_index: 0,
            previous_carousel_index: 0,
        }
        this.toggleNavbar = this.toggleNavbar.bind(this)
        this.changeCarouselIndex = this.changeCarouselIndex.bind(this)
        this.cycleCarouselIndex = this.cycleCarouselIndex.bind(this)
    }

    componentDidMount() {
        fetch('/wp-json/wp/v2/posts?filter[orderby]=date')
        .then(response => response.json())
        .then(data => {
            this.setState({ posts: data }, () => this.setState({ loading: false }))
        })
        this.cycleCarouselIndex()
    }

    toggleNavbar() {
        this.setState({ nav_collapsed: !this.state.nav_collapsed })
    }

    changeCarouselIndex(index) {
        this.setState(prevState =>({
            carousel_index: index,
            previous_carousel_index: prevState.carousel_index
        }), () => {
            document.getElementById(`carousel${index}`).innerHTML = '●'
            document.getElementById(`carousel${this.state.previous_carousel_index}`).innerHTML = '○'
        })
    }

    cycleCarouselIndex() {
        function cycle() {
            if (this.state.carousel_index === 4) {
                this.setState({ carousel_index: 0, previous_carousel_index: 4 }, () => {
                    document.getElementById(`carousel${this.state.carousel_index}`).innerHTML = '●'
                    document.getElementById(`carousel${this.state.previous_carousel_index}`).innerHTML = '○'
                })
            } else

            this.setState(prevState =>({
                carousel_index: this.state.carousel_index+1,
                previous_carousel_index: prevState.carousel_index
            }), () => {
                document.getElementById(`carousel${this.state.carousel_index}`).innerHTML = '●'
                document.getElementById(`carousel${this.state.previous_carousel_index}`).innerHTML = '○'
            })
        }
        setInterval(cycle.bind(this), 5000)
    }

    render() {
        return (
            <div>
                <NavbarContainer toggleNavbar={this.toggleNavbar} nav_collapsed={this.state.nav_collapsed}/>
                <CarouselContainer carousel_index={this.state.carousel_index} posts={this.state.posts} loading={this.state.loading} changeCarouselIndex={this.changeCarouselIndex}/>
            </div>
        )
    }
}

export default Home;