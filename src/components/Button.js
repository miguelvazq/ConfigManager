import React from 'react'

class Button extends React.Component {
    render() {
        return (
            <button className={this.props.class} type={this.props.type}> {this.props.value} </button>
        )
    }
}

export default Button