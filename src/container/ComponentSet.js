import React from 'react';

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

    componentDidMount() {
        const events = this.props.data;
        events.map(type => {
            this.addComponent(type);
        }); 
    }

    addComponent() {
        console.log(`Loading ${type} component...`);
    }

    render() {
        const { components } = this.state;
        if (components.length === 0) return <div>Loading...</div>;
        return (
            {components}
        )
    }
}


export default ComponentSet;