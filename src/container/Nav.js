import React from 'react';
import axios from 'axios';
import DropdownControl from '../components/DropdownControl';
import TreeMenu from '../components/TreeMenu';
import UtilityBar from '../components/UtilityBar';
import Environment from './Environment';

const URL = "http://10.239.20.71:8020/ws_config2/GetNodeTree.json"

class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.subMenuCallback = this.subMenuCallback.bind(this);

        this.state = {
            data: {},
            defaultNode: "DafileServProcess"
        }
    }

    async componentDidMount() {
        var data = {};
        var getNavigation = axios.get(URL, {
            params: {
                NodeId: "1",
                SessionId: "39",
                IncludeAttributes: false,
                NumLevels: 2
            }
        });

        try {
            let response = await getNavigation;
            let children = [];
            data["name"] = "environment.xml";
            data["toggled"] = true;

            response.data.GetTreeResponse.Tree.Children.Element.map((nodeType) => {
                if (!nodeType.NodeInfo.Hidden) {
                    children.push({
                        name: nodeType.NodeInfo.DisplayName,
                        children: nodeType.Children
                    });
                    data["children"] = children;
                    // data.children.map((element) => {
                    //     if (element.name === "Software") {
                    //         element["toggled"] = true;
                    //     }
                    // });
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
                        if (index === 1) {
                            subChildren
                        }
                        subChildren.map((nodeName, idx) => {
                            // if (nodeName.name === "DafilesrvProcess") {
                            //     nodeName["toggled"] = true;
                            // }
                            let nodes = [];

                            if (nodeName.name != nodeName.category) {
                                nodes.push({
                                    name: nodeName.category,
                                    id: nodeName.id
                                });
                                nodeName["children"] = nodes;
                                // if (nodeName.name === "DafilesrvProcess") {
                                //     nodes[0]["active"] = true;
                                // }
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

    subMenuCallback(dataFromClick, breadCrumb) {
        this.props.onClick(dataFromClick, breadCrumb);
    }

    handleOnEnvironmentChange(data) {

    }

    render() {
        return (
            <nav>
                <div className="treeContainer">
                    <section className="logo"><div className="logoContainer">CM</div><span>Configuration Manager</span></section>
                    <section className="configuring"><span>Currently editing: </span>
                        <DropdownControl defaultValue='environment.xml' options={[{ key: 'env1', Value: 'environment.xml', text: 'environment.xml' },{ key: 'env2', Value: 'environment2.xml', text: 'environment2.xml' }] }  onChange={this.handleOnEnvironmentChange}/>
                    </section>
                    <TreeMenu data={this.state.data} onClick={this.subMenuCallback}  />
                </div>
            </nav>
        )
    }
}
export default Navigation;