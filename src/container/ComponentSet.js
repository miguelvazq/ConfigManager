import React from 'react';
//import Loadable from 'react-loadable';
import shortid from 'shortid';
import CheckBoxControl from '../components/CheckBoxControl';
import InputControl from '../components/InputControl';
import { Form } from 'semantic-ui-react';

var imported = [];
var count = 0;

class ComponentSet extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            component: [],
            loading: "loading"
        }
    }

    // componentWillReceiveProps(nextProps) {
    //     if (this.props.data !== nextProps.data){
    //         this.tabGeneration(nextProps.data)
    //     }
    // }


    async componentDidMount() {
        this.tabGeneration(this.props.data);
        // const tabs = this.props.data;
        // const nodeId = this.props.key;
        // tabs.map(async (type) =>
        //     await this.addComponent(type, nodeId, tabs.length));
    }

    tabGeneration(data) {
        const tabs = data;
        const nodeId = this.props.key;
        tabs.map(async (type) =>
            await this.addComponent(type, nodeId, tabs.length));
    }

    async addComponent(type, nodeId, tabslength) {
        var controlToImport = type.Type.Name;
        switch (controlToImport) {
            case "xs:string":
            case "xs:nonNegativeInteger":
            case "xs:positiveInteger":
            case "xs:unsignedInt":
            case "default":
                imported.push( <Form.Group key={shortid.generate()}><InputControl type="text" placeholder={type.DisplayName} label={type.DisplayName} tooltip={type.Tooltip} /> </Form.Group>);
            break;
            case "xs:boolean":
                imported.push(<Form.Group key={shortid.generate()}><CheckBoxControl /></Form.Group>);
            default:
                imported.push(<Form.Group key={shortid.generate()}><InputControl type="text" placeholder={type.DisplayName} tooltip={type.Tooltip} /></Form.Group>);
            }
        count++

        if (tabslength === count) {
            this.generateUI(imported)
        }
    }

    generateUI(data) {
        this.setState({
            component: data
        })
    }

        // Would like to use this solution
        // import(`../components/${type}.js`).then(component =>{
        //     console.log(component)
        // }
        // require.ensure(`../components/${type}`).then(function(component){
        //     console.log(component)
        // })

        // if (imported.indexOf(controlName) > -1){
        //     console.log("I already have it");
        // } else {
        //     require(`../components/${controlName}`);
        // }
        // let result =  await this.then(function(result){
        //     this.setState({
        //         component: imported
        //     });
        // })
        // let result = await this.addComponent();
        // alert(result)

    render() {
        // const { component } = this.state;
        // if (component.length === 0) {
        //     return <div className="loadingPlaceholder">Loading...</div>;
        // }
        // const componentsElements = component.map(Component => (
        //     <Component key={shortid.generate()} placeholder="test" />
        // ));

        return (
            <div className="content">
                <Form>
                    {this.state.component}
                </Form>
            </div>
        )
    }
}


export default ComponentSet;