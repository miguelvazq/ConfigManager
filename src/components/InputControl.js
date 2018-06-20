import React from 'react'
import { Input } from 'semantic-ui-react'

class InputControl extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Input type={this.props.type} placeholder={this.props.placeholder}  />
        )
    }
}
export default InputControl