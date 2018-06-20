import React from 'react'
import { Radio } from 'semantic-ui-react'

class RadioControl extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Radio toggle/>
        )
    }
}
export default RadioControl