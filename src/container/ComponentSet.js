import React from 'react';
//import Loadable from 'react-loadable';
import shortid from 'shortid';
import CheckBoxControl from '../components/CheckBoxControl';
import InputControl from '../components/InputControl';
import DropdownControl from '../components/DropdownControl';
import { Form } from 'semantic-ui-react';


class ComponentSet extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            component: [],
            id: ""
        }
    }

    componentDidMount() {
        this.tabGeneration(this.props.data);
    }

    tabGeneration(data) {
        const tab = data;
        const nodeId = this.props.id;
        this.addComponent(tab, nodeId);
    }

    addComponent(tab, id) {
        var imported = [];
        tab.map((type) => {
            var controlToImport = type.Type.BaseType;
            if (type.Type.Limits.ChoiceList && type.Type.BaseType !== "boolean") {
                controlToImport = "list"
            }
            switch (controlToImport) {
                case "string":
                case "integer":
                    imported.push(<Form.Group key={shortid.generate()}><InputControl type={controlToImport === "string" ? "text" : "number"} required={type.Required} placeholder={type.DisplayName} defaultValue={type.CurrentValue} label={type.DisplayName} tooltip={type.Tooltip} /> </Form.Group>);
                    break;
                case "boolean":
                    imported.push(<Form.Group key={shortid.generate()}><CheckBoxControl label={type.DisplayName} required={type.Required} checked={type.CurrentValue === "true" ? true : false}/></Form.Group>);
                    break;
                case "list":
                    imported.push(<Form.Group key={shortid.generate()}><DropdownControl label={type.DisplayName} required={type.Required} options={type.Type.Limits.ChoiceList.Choice} /></Form.Group>);
                    break;
                default:
                    imported.push(<Form.Group key={shortid.generate()}><InputControl type="text" placeholder={type.DisplayName} required={type.Required} label={type.DisplayName} tooltip={type.Tooltip} /></Form.Group>);
                    break;
            }
        });
        this.setState({
            component: imported
        })
    }

    render() {
        return (
            <Form>
                {this.state.component}
            </Form>
        )
    }
}

export default ComponentSet;