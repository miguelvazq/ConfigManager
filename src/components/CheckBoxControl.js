import React from 'react'
import { Checkbox } from 'semantic-ui-react'
import { Label } from 'semantic-ui-react'

class CheckBoxControl extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: this.props.checked ? "enabled" : "disabled"
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(event, data){
        this.setState({
            checked: this.state.checked === "enabled" ? "disabled" : "enabled"
        })
    }

    render() {
        return (
            <Checkbox label={this.props.label + " (" + this.state.checked +")" }  defaultChecked={this.props.checked} toggle onChange={this.onChange} />
        )
    }
}
export default CheckBoxControl