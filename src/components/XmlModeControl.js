import {Controlled as CodeMirror} from 'react-codemirror2'
import axios from 'axios';
const URL = "http://10.239.20.71:8020/ws_config2/GetNodeTree.json"

class XmlModeControl extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {}
        }
    }

    async componentDidMount() {
        var getXML = axios.get(URL, {
            params: {
                NodeId: "1",
                SessionId: "0",
                IncludeAttributes: true,
                NumLevels: 500
            }
        });
        try {
            let response = await getXML;
            this.setState({
                data: response
            })
        } catch (e){
            console.error(e)
        }
    }
    render() {
        return (
            <CodeMirror
                value={this.state.value}
                options={options}
                onBeforeChange={(editor, data, value) => {
                    this.setState({value});
                }}
                onChange={(editor, data, value) => {
                }}
            />
        )
    }
}
export default XmlModeControl;