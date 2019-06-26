import React from 'react';
import NavbarContainer from './homecomponents/NavbarContainer'
import CarouselContainer from './homecomponents/CarouselContainer'
import ContentContainer from './homecomponents/ContentContainer'
import InstagramContainer from './homecomponents/InstagramContainer'
import FooterContainer from './homecomponents/FooterContainer'
import ApiKey from '../ApiKey'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            posts: [],
            nav_collapsed: true,
            carousel_index: 0,
            previous_carousel_index: 0,
            posts_page: 1,
            news_email: '',
            news_status: '',
            instagram_posts: [],
        }
        this.toggleNavbar = this.toggleNavbar.bind(this)
        this.changeCarouselIndex = this.changeCarouselIndex.bind(this)
        this.cycleCarouselIndex = this.cycleCarouselIndex.bind(this)
        this.changePostsPage = this.changePostsPage.bind(this)
        this.postData = this.postData.bind(this)
        this.updateEmail = this.updateEmail.bind(this)
        this.decodeEntities = this.decodeEntities.bind(this)
    }

    componentDidMount() {
        fetch('http://165.22.144.213:8000/wp-json/wp/v2/posts?per_page=99&filter[orderby]=date')
        .then(response => response.json())
        .then(data => {
            this.setState({ posts: data }, () => this.setState({ loading: false }))
        })
        fetch('https://api.instagram.com/v1/users/self/media/recent/?access_token=6238699054.2f3c5b2.74aa9d9e31824f20b6244ae437d43561')
        .then(response => response.json())
        .then(data => {
            this.setState({ instagram_posts: data.data}, () => console.log(this.state.instagram_posts))
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
            document.getElementById(`carousel${this.state.carousel_index}`).setAttribute('class', 'carousel_active')
            document.getElementById(`carousel${index}`).innerHTML = '●'
            document.getElementById(`carousel${this.state.previous_carousel_index}`).removeAttribute('class', 'carousel_active')
            document.getElementById(`carousel${this.state.previous_carousel_index}`).innerHTML = '○'
        })
    }

    cycleCarouselIndex() {
        function cycle() {
            if (this.state.carousel_index === 4) {
                this.setState({ carousel_index: 0, previous_carousel_index: 4 }, () => {
                    document.getElementById(`carousel${this.state.carousel_index}`).setAttribute('class', 'carousel_active')
                    document.getElementById(`carousel${this.state.carousel_index}`).innerHTML = '●'
                    document.getElementById(`carousel${this.state.previous_carousel_index}`).removeAttribute('class', 'carousel_active')
                    document.getElementById(`carousel${this.state.previous_carousel_index}`).innerHTML = '○'
                })
            } else

            this.setState(prevState =>({
                carousel_index: this.state.carousel_index+1,
                previous_carousel_index: prevState.carousel_index
            }), () => {
                document.getElementById(`carousel${this.state.carousel_index}`).setAttribute('class', 'carousel_active')
                document.getElementById(`carousel${this.state.carousel_index}`).innerHTML = '●'
                document.getElementById(`carousel${this.state.previous_carousel_index}`).removeAttribute('class', 'carousel_active')
                document.getElementById(`carousel${this.state.previous_carousel_index}`).innerHTML = '○'
            })
        }
        setInterval(cycle.bind(this), 5000)
    }

    decodeEntities = (function() {
        // this prevents any overhead from creating the object each time
        var element = document.createElement('div');
      
        function decodeHTMLEntities (str) {
          if(str && typeof str === 'string') {
            // strip script/html tags
            str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
            str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
            element.innerHTML = str;
            str = element.textContent;
            element.textContent = '';
          }
      
          return str;
        }
      
        return decodeHTMLEntities;
      })();
    
    changePostsPage(op) {
        if (op === 1) {
            this.setState({posts_page: 1})
        } else
        if (op === 2) {
            this.setState({posts_page: 2})
        } else
        if (op === 3) {
            this.setState({posts_page: 3})
        }
    }

    postData(event){
        event.preventDefault()
        let subscriber = JSON.stringify({"email_address": this.state.news_email, "status": "subscribed"})
        let proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        fetch(proxyUrl + 'https://us17.api.mailchimp.com/3.0/lists/8e0d01458b/members', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
              'Authorization': 'ApiKey ' + ApiKey,
              'Content-Type': 'application/json'
          },
          body: subscriber
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
          if (data.email_address != null) {
            this.setState({news_status: 'success'})
          }
          if (data.status === 400) {
            this.setState({news_status: 'failure'})
          }
        })
      }

    updateEmail(event){
        this.setState({news_email: event.target.value})
    }

    render() {
        return (
            <div>
                <NavbarContainer toggleNavbar={this.toggleNavbar} nav_collapsed={this.state.nav_collapsed}/>
                <CarouselContainer decodeEntities={this.decodeEntities} carousel_index={this.state.carousel_index} posts={this.state.posts} loading={this.state.loading} changeCarouselIndex={this.changeCarouselIndex}/>
                <ContentContainer decodeEntities={this.decodeEntities} news_status={this.state.news_status} updateEmail={this.updateEmail} postData={this.postData} loading={this.state.loading} posts={this.state.posts} posts_page={this.state.posts_page} changePostsPage={this.changePostsPage}/>
                <InstagramContainer instagram_posts={this.state.instagram_posts}/>
                <FooterContainer/>
            </div>
        )
    }
}

export default Home;