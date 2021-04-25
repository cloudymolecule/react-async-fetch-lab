// create your App component here
import React, { Component } from 'react'

export default class App extends Component {
    
    state = {
        people: []
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json').then(res => res.json()).then(data => {this.setState({people: data.people})})
    }
}
