import React from 'react';
import NavbarContainer from './homecomponents/NavbarContainer'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nav_collapsed: true
        }
        this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    toggleNavbar() {
        this.setState({ nav_collapsed: !this.state.nav_collapsed })
    }

    render() {
        return (
            <div>
                <NavbarContainer toggleNavbar={this.toggleNavbar} nav_collapsed={this.state.nav_collapsed}/>
            </div>
        )
    }
}

export default Home;