import React from 'react';
import NavbarContainer from './homecomponents/NavbarContainer'
import CarouselContainer from './homecomponents/CarouselContainer'
import ContentContainer from './homecomponents/ContentContainer'
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
            news_status: ''
        }
        this.toggleNavbar = this.toggleNavbar.bind(this)
        this.changeCarouselIndex = this.changeCarouselIndex.bind(this)
        this.cycleCarouselIndex = this.cycleCarouselIndex.bind(this)
        this.changePostsPage = this.changePostsPage.bind(this)
        this.postData = this.postData.bind(this)
        this.updateEmail = this.updateEmail.bind(this)
    }

    componentDidMount() {
        fetch('/wp-json/wp/v2/posts?per_page=99&filter[orderby]=date')
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
        console.log(event.target.value)
    }

    render() {
        return (
            <div>
                <NavbarContainer toggleNavbar={this.toggleNavbar} nav_collapsed={this.state.nav_collapsed}/>
                <CarouselContainer carousel_index={this.state.carousel_index} posts={this.state.posts} loading={this.state.loading} changeCarouselIndex={this.changeCarouselIndex}/>
                <ContentContainer news_status={this.state.news_status} updateEmail={this.updateEmail} postData={this.postData} loading={this.state.loading} posts={this.state.posts} posts_page={this.state.posts_page} changePostsPage={this.changePostsPage}/>
            </div>
        )
    }
}

export default Home;