import React from 'react';
import Loadable from 'react-loadable';

class ComponentSet extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            components: []
        }
    }

    // componentWillReceiveProps(nextProps) {
    //     if (this.props.data !== nextProps.data){
    //         this.getTabComponents(nextProps.data);
    //     }
    //     this.getTabComponents(nextProps.data);
    // }

    async componentDidMount() {
        const events = this.props.data;
        events.map(async type => 
            await this.addComponent(type.Type.Name));

            // switch (type.Type.Name) {
            //     case "default":
            //         return InputControl
            //     case "choice":
            //         return DropdownControl
            // }
    }

    async addComponent(type) {
        var componentRequire = [];

        switch (type) {
            case "default":
                type = "InputControl"
            break;
            case "choice":
                type = "DropdownControl"
            break;
        }

        console.log(`Loading ${type} component...`);

        const r = await import ('react');
        // import(`../components/${type}.js`).then(component =>{
        //     console.log(component)
        // }
        // require.ensure(`../components/${type}`).then(function(component){
        //     console.log(component)
        // })

        // require(`../components/${type}`).then(function(component){
        //     console.log(component);
        // })

        // require(`../components/${type}`).then(component =>{
        //     this.setState({
        //         components: component
        //     });
        // }).catch(error => {
        //     console.error(`${type} not yet supported`);
        // });

    //     require("../components/" + type).then(component =>
    //         this.setState({
    //         components: this.state.components.concat(component.default)
    //         })
    //   )
    //   .catch(error => {
    //     console.error(`"${type}" not yet supported`);
    //   });
        //require(`../components/${type}`);
    }

    render() {
        const { components } = this.state;
        if (components.length === 0) return <div>Loading...</div>;
        const componentsElements = components.map(Component => (
            <Component key={shortid.generate()} />
        ));

        return (
            {components}
        )
    }
}


export default ComponentSet;