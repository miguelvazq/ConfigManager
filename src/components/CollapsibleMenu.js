import React from 'react';
import {Treebeard} from 'react-treebeard';

// const data = {
//     name: 'root',
//     children: [
//         {
//             name: 'Hardware',
//             children: [
//                 { name: 'child1' },
//                 { name: 'child2' }
//             ]
//         },
//         // {
//         //     name: 'loading parent',
//         //     loading: true,
//         //     children: []
//         // },
//         {
//             name: 'Software',
//             children: [
//                 {
//                     name: 'nested parent',
//                     children: [
//                         { name: 'nested child 1' },
//                         { name: 'nested child 2' }
//                     ]
//                 }
//             ]
//         }
//     ]
// }


class CollapsibleMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onToggle = this.onToggle.bind(this);
    };

    onToggle(node, toggled){
        if(this.state.cursor) {
            this.state.cursor.active = false;
        }
        node.active = true;
        if(node.children) { 
            node.toggled = toggled;
        }

        this.setState({ cursor: node });
}

    render() {
        return (
        <Treebeard
            data={this.props.data}
            onToggle={this.onToggle}
        />
        );
    }
}

export default CollapsibleMenu;