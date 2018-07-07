import React from 'react'
import { Modal, Header } from 'semantic-ui-react'

class DialogControl extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {}
        }
    }

    render() {
        return (
            <Modal trigger={<Button>Show Modal</Button>}>
                <Modal.Header>{this.props.placeholder}</Modal.Header>
            </Modal>
        )
    }

}
export default DialogControl;