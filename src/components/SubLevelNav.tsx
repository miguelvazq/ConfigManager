import * as React from "react";
import * as hpccComms from "@hpcc-js/comms";
import * as util from "@hpcc-js/util";

export class SubLevelNav extends React.Component<any, any> {    
    constructor(props:any) {
        super(props);
        this.state = {
            subLevelItems: []
        }        
    }

    componentWillMount() {
    }

    render() {
        var data = [
            {
              text: "Parent 1",
              nodes: [
                {
                  text: "Child 1",
                  nodes: [
                    {
                      text: "Grandchild 1"
                    },
                    {
                      text: "Grandchild 2"
                    }
                  ]
                },
                {
                  text: "Child 2"
                }
              ]
            },
            {
              text: "Parent 2"
            },
            {
              text: "Parent 3"
            },
            {
              text: "Parent 4"
            },
            {
              text: "Parent 5"
            }
          ];
        return <div className="subLevelDiv">
            <div id="treeview"></div>
            
        </div>
    }
}