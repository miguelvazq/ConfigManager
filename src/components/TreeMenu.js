import React from 'react';
import {Treebeard} from 'react-treebeard';
import style from './styles/treeMenuStyles';

class TreeMenu extends React.Component {
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
        } else {
            this.onHandleClick(node.id);
        }
        this.setState({ cursor: node });
    }

    onHandleClick(nodeId) {
        this.props.onClick(nodeId);
    }

    render() {
        return (
        <Treebeard
            data={this.props.data}
            onToggle={this.onToggle}
            style={style}
            onClick={this.onHandleClick}
        />
        );
    }
}
export default TreeMenu;