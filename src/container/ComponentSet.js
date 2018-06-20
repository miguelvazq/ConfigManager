import React from 'react';
import Loadable from 'react-loadable';

class ComponentSet extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            component: []
        }
    }

    // componentWillReceiveProps(nextProps) {
    //     if (this.props.data !== nextProps.data){
    //         this.getTabComponents(nextProps.data);
    //     }
    //     this.getTabComponents(nextProps.data);
    // }

    async componentDidMount() {
        const tabs = this.props.data;
        tabs.map(async type => 
            await this.addComponent(type));
    }

    async addComponent(type) {
        var controlToImport = type.Type.Name;
        var controlName;
        var imported = [];

        switch (controlToImport) {
            case "xs:string":
            case "xs:nonNegativeInteger":
            case "xs:positiveInteger":
            case "xs:unsignedInt":
            case "default":
                controlName = "InputControl";
                imported.push(controlName);
            break;
            case "xs:boolean":
                controlName = "RadioControl";
                imported.push(controlName);
            default:
                controlName = "InputControl";
                imported.push(controlName);
        }
        // Would like to use this solution
        // import(`../components/${type}.js`).then(component =>{
        //     console.log(component)
        // }
        // require.ensure(`../components/${type}`).then(function(component){
        //     console.log(component)
        // })

        if (imported.indexOf(controlName) > -1){
            console.log("I already have it");
        } else {
            require(`../components/${controlName}`);
        }

        this.setState({
            component: imported
        });
    }

    render() {
        const { component } = this.state;
        if (component.length === 0) return <div className="loadingPlaceholder">Loading...</div>;
        const componentsElements = component.map(Component => (
            <Component key={shortid.generate()} />
        ));

        return (
            {component}
        )
    }
}


export default ComponentSet;