import React from 'react';
import NavbarContainer from './homecomponents/NavbarContainer'
import CarouselContainer from './homecomponents/CarouselContainer'

const items = [
    {
      src: 'https://picsum.photos/200/300',
      altText: 'Slide 1',
      caption: 'Slide 1'
    },
    {
      src: 'https://picsum.photos/200/300',
      altText: 'Slide 2',
      caption: 'Slide 2'
    },
    {
        src: 'https://picsum.photos/200/300',
        altText: 'Slide 3',
      caption: 'Slide 3'
    }
];

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nav_collapsed: true,
            carousel_index: 0
        }
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    componentDidMount() {

    }

    onExiting() {
        this.animating = true;
      }
    
      onExited() {
        this.animating = false;
      }
    
      next() {
        if (this.animating) return;
        const nextIndex = this.state.carousel_index === items.length - 1 ? 0 : this.state.carousel_index + 1;
        this.setState({ carousel_index: nextIndex });
      }
    
      previous() {
        if (this.animating) return;
        const nextIndex = this.state.carousel_index === 0 ? items.length - 1 : this.state.carousel_index - 1;
        this.setState({ carousel_index: nextIndex });
      }
    
      goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ carousel_index: newIndex });
      }
    

    toggleNavbar() {
        this.setState({ nav_collapsed: !this.state.nav_collapsed })
    }

    render() {
        return (
            <div>
                <NavbarContainer toggleNavbar={this.toggleNavbar} nav_collapsed={this.state.nav_collapsed}/>
                <CarouselContainer carousel_index={this.state.carousel_index} items={items} onExiting={this.onExiting} onExited={this.onExited} next={this.next} previous={this.previous} goToIndex={this.goToIndex}/>
            </div>
        )
    }
}

export default Home;