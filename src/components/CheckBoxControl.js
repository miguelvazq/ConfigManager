import React from 'react'
import { Checkbox } from 'semantic-ui-react'

class CheckBoxControl extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Checkbox toggle />
        )
    }
}
export default CheckBoxControl