// create your App component here
import React, { Component } from 'react'

export default class App extends Component {
    
    state = {

    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
            .then(resp => resp.json())
            .then(data => data)
    }
    
    render() {
        return (
            <div>App</div>
        )
    }
}