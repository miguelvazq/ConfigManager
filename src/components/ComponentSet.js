import React from 'react';

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