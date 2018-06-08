import React, { Component } from 'react';
import {Tree} from 'react-ui-tree';

class Tree2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null,
      //tree: tree
    };
    //this.onToggle = this.onToggle.bind(this);
  };

  // renderNode = node => {
  //   return (
  //     <span
  //       className={cx('node', {
  //         'is-active': node === this.state.active
  //       })}
  //       onClick={this.onClickNode.bind(null, node)}
  //     >
  //       {node.module}
  //     </span>
  //   );
  // };

  // onClickNode = node => {
  //   this.setState({
  //     active: node
  //   });
  // };

  render() {
    return (
      <Tree2
        paddingLeft={20}
        tree={this.state.tree}
        // onChange={this.handleChange}
        // isNodeCollapsed={this.isNodeCollapsed}
        //renderNode={this.renderNode}
      />
    );
  }

  // handleChange = tree => {
  //   this.setState({
  //     tree: tree
  //   });
  // };

  // updateTree = () => {
  //   const { tree } = this.state;
  //   tree.children.push({ module: 'test' });
  //   this.setState({
  //     tree: tree
  //   });
  // };
}

export default Tree2;