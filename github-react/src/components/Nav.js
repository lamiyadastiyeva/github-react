import React, { Component } from 'react'

class Nav extends Component {
    render() {
        return (
            <div>
                <nav className='navbar navbar-dark bg-primary'>
                    <a  target="_blank" href={this.props.url} className='navbar-brand ms-5'>
                    <i className={this.props.icon}></i>{this.props.title}</a>
                </nav>
            </div>
        )
    }
}

export default Nav



