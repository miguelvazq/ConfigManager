import React from 'react';
import ButtonControl from '../components/ButtonControl';
import InputControl from '../components/InputControl';
import DropdownControl from '../components/DropdownControl';
import CheckBoxControl from '../components/CheckBoxControl';

class ComponentSet extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputs: [],
            dropdowns: [],
            checkboxs: []
        }
    }

    render() {
        return (
            <div>
                <InputControl name="" />
            </div>
        )
    }
}


export default ComponentSet;