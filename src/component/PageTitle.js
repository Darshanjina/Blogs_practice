import React, { Component } from 'react'

export default class PageTitle extends Component {
    render() {
        return (
            <div className="h4 text-dark text-center my-3">
                {this.props.title}
            </div>
        )
    }
}
