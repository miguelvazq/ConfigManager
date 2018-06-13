import React from 'react';
import axios from 'axios';
import DropdownControl from '../components/DropdownControl';
import TreeMenu from '../components/TreeMenu';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        var data = {};
        const URL = "http://10.239.20.71:8020/ws_config2/GetNodeTree.json"
        this.subMenuCallback = this.subMenuCallback.bind(this);

        this.state = {
            data: {},
            name: "root"
        }

        axios.get(URL, {
            params: {
                NodeId: "1",
                SessionId: "0",
                IncludeAttributes: true,
                NumLevels: 2
            }
        }).then(res => {
            let children = [];
            data["name"] = "root"
            res.data.GetTreeResponse.Tree.Children.Node.map((node, idx) => {
                let subChildren = [];
                children.push({
                    name: node.NodeInfo.Name
                });
                data["children"] = children;
                node.Children.Node.map((child) => {
                    subChildren.push({
                        name: child.NodeInfo.Name,
                        id: child.NodeId
                    });
                    data.children[idx]["children"] = subChildren;
                });
            });
             this.setState({
                 data: data
             });
        });
    };

    subMenuCallback(dataFromClick) {
        this.props.onClick(dataFromClick);
    }


    render() {
        return (
            <nav>
                <section className="logo"><div className="logoContainer">CM</div><span>Configuration Manager</span></section>
                <section className="configuring"><span>Currently editing: </span>
                    <DropdownControl options={[{ key: 'env1', value: 'environment.xml', text: 'environment.xml' },{ key: 'env2', value: 'environment2.xml', text: 'environment2.xml' }]} />
                </section>
                <TreeMenu data={this.state.data} onClick={this.subMenuCallback}  />
            </nav>

        )
    }
}
export default Navigation;