import React from 'react';
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

    handleDropDownChange(data) {
        console.log(data)
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
                    imported.push(<Form.Group key={shortid.generate()} inline><Form.Field required={type.Required}><label>{type.DisplayName}</label><InputControl type={controlToImport === "string" ? "text" : "number"} required={type.Required} placeholder={type.DisplayName} defaultValue={type.CurrentValue} tooltip={type.Tooltip} /></Form.Field></Form.Group>);
                    break;
                case "boolean":
                    imported.push(<Form.Group key={shortid.generate()} inline><Form.Field><label>{type.DisplayName}</label><CheckBoxControl checked={type.CurrentValue === "true" ? true : false} tooltip={type.Tooltip}/></Form.Field></Form.Group>);
                    break;
                case "list":
                    imported.push(<Form.Group key={shortid.generate()} inline><Form.Field required={type.Required}><label>{type.DisplayName}</label><DropdownControl options={type.Type.Limits.ChoiceList.Choice} onChange={this.handleDropDownChange} /></Form.Field></Form.Group>);
                    break;
                default:
                    imported.push(<Form.Group key={shortid.generate()} inline><Form.Field required={type.Required} width={8}><label>{type.DisplayName}</label><InputControl type="text" required={type.Required} placeholder={type.DisplayName} tooltip={type.Tooltip} /></Form.Field></Form.Group>);
                    break;
            }
        });
        this.setState({
            component: imported
        });
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