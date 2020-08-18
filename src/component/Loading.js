import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        return (
            <div className="my-3 w-100 text-center">
                <img src={require('../assets/loading.gif')} className="loading" alt="loading"/>
            </div>
        )
    }
}
