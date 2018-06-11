import React from 'react';
import axios from 'axios';
import Button from './Button';
import Select from './Select';
import TreeMenu from './TreeMenu';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        var data = {};
        const IP = "http://10.239.20.71:8020/ws_config2/GetNodeTree.json"

        this.state = {
            data: {},
            name: "root"
        }

        axios.get(IP,{
            params: {
                NodeId: "521",
                SessionId: "2",
                IncludeAttributes: true,
                NumLevels: 2
            }
        }).then(res => {
            let children = [];
            data["name"] = "root"
            res.data.GetTreeResponse.Tree.Children.Node.forEach(function(node, idx) {
                console.log(node)
                let subChildren = [];
                children.push({
                    name: node.NodeInfo.Name
                });
                data["children"] = children;

                node.Children.Node.forEach(child => {

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

    subMenuCallback(id) {
        console.log(id)
    }

    render() {
        return (
            <div className="nav">
                <nav>
                    <section className="logo"><div className="logoContainer">CM</div><span className="strong">Configuration Manager</span></section>
                    <section className="configuring"><span>Currently editing: </span>
                        <Select placeholder="environment.xml" defaultValue="click here" options={[{ key: 'env1', value: 'environment.xml', text: 'environment.xml' }]} />
                    </section>
                    <TreeMenu data={this.state.data} changeHandler={this.subMenuCallback} />
                </nav>
            </div>
        )
    }
}
export default Navigation;