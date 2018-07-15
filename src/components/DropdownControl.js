import React from 'react';
// import PropTypes from 'prop-types';
import { Form, Popup} from 'semantic-ui-react';

export default class DropdownControl extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: [],
            defaultValue: null,
            id: ""
        }
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    componentDidMount() {
        this.props.options.map((option) => {
            this.state.options.push({
                key: option.Value,
                value: option.Value,
                text: option.DisplayName || option.Value,
                icon: option.icon,
                active: option.active
            });
        });
    }

    // componentDidUpdate() {
    //     this.props.options.map((option) => {
    //         if (option.value != option.value) {
    //             this.state.options.push({
    //                 key: option.value,
    //                 value: option.value,
    //                 text: option.value,
    //                 icon: option.icon,
    //                 active: option.active
    //             });
    //         }
    //     });
    // }

    handleOnChange(event, data){
        this.props.onChange(data.value);
    }

    render() {
        return (
            this.props.tooltip ? <Popup trigger={<Form.Dropdown icon={this.state.active ? this.state.icon : ""} defaultValue={this.props.defaultValue} placeholder={this.props.placeholder} selection options={this.state.options}></Form.Dropdown>} content={this.props.tooltip} onChange={this.handleOnChange}/> : <Form.Dropdown placeholder={this.props.placeholder} selection options={this.state.options} onChange={this.handleOnChange}></Form.Dropdown>
        )
    }
}

// DropdownControl.propTypes = {
//     placeholder: PropTypes.string.isRequired
// }

// DropdownControl.defaultProps = {
//     placeholder: "Please make a selection"
// }


