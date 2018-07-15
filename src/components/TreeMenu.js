import React from 'react';
import {Treebeard} from 'react-treebeard';
import style from './styles/treeMenuStyles';

export default class TreeMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parent: "",
            component: "",
            node: "",
        };
        this.onToggle = this.onToggle.bind(this);
    };

    onToggle(node, toggled){
        if (this.state.cursor) {
            this.state.cursor.active = false;
        }
        node.active = true;
        if(node.children) {
            node.toggled = toggled;
            this.state.parent === "" ? this.state.parent = node.name : this.state.component = node.name;
        } else {
            this.state.node = node.name;
            this.onHandleClick(node.id, this.state);
        }

        this.setState({
            cursor: node
        });
    }

    onHandleClick(nodeId, breadCrumb) {
        let path = [];
        path.push(breadCrumb);
        this.props.onClick(nodeId, path);
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