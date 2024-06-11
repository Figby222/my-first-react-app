import React, { Component } from 'react';

class Count extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>Todos count: {this.props.todos.length}</p>
        )
    }
}

export default Count;