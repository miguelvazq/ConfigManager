import React from 'react';
import axios from 'axios';
import DropdownControl from '../components/DropdownControl';
import TreeMenu from '../components/TreeMenu';

const URL = "http://10.239.20.71:8020/ws_config2/GetNodeTree.json"

class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.subMenuCallback = this.subMenuCallback.bind(this);

        this.state = {
            data: {}
        }
    }

    async componentDidMount() {
        var data = {};
        var getNavigation = axios.get(URL, {
            params: {
                NodeId: "1",
                SessionId: "0",
                IncludeAttributes: false,
                NumLevels: 2
            }
        });

        try {
            let response = await getNavigation;
            let children = [];
            data["name"] = "root";
            data["toggled"] = true;

            response.data.GetTreeResponse.Tree.Children.Element.map((nodeType, idx) => {
                if (!nodeType.NodeInfo.Hidden) {
                    children.push({
                        name: nodeType.NodeInfo.DisplayName,
                        children: nodeType.Children
                    });
                    data["children"] = children;
                }
            });

            Promise.all(children).then((response) => {
                response.map((category, index) => {
                    let subChildren = [];
                    category.children.Element.map((children) => {
                        subChildren.push({
                            category: children.NodeInfo.DisplayName,
                            name: children.NodeInfo.Category,
                            id: children.NodeId
                        });
                        data.children[index]["children"] = subChildren;
                        subChildren.map((nodeName) => {
                            let nodes = [];
                            if (nodeName.name != nodeName.category) {
                                nodes.push({
                                    name: nodeName.category,
                                    id: nodeName.id
                                });
                                nodeName["children"] = nodes;
                            }
                        });
                    });
                });
            });
        } catch (e) {
            console.error('Error: ' + e );
            data["name"] = "no data found"
        }

        this.setState({
            data: data
        });
    }

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