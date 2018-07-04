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
            this.setState({
                path: this.state.cursor.name,
                category: this.state.cursor.category ? this.state.cursor.category :  "",
                name: this.state.cursor.category ? this.state.cursor.name : ""
            });
        }
        node.active = true;
        if(node.children) { 
            node.toggled = toggled;
        } else {
            console.log(this.state)
            this.onHandleClick(node.id, this.state.path+this.state.cursor.name+this.state.cursor.category);
        }
        this.setState({ cursor: node });
    }

    onHandleClick(nodeId, breadcrumbPath) {
        this.props.onClick(nodeId, breadcrumbPath);
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