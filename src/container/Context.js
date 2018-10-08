//EXPERIMENTAL TODO
// import * as React from "react";
// import axios from "axios";

// const AppContext = React.createContext();
// const URL = "http://10.239.20.71:8020/ws_config2"

// class AppProvider extends React.Component{
//     constructor(props) {
//         super(props);

//         this.state = {
//             sessionId: 1
//         }
//     }

//     componentDidMount() {
//         const openSession = axios.get(URL+"/OpenSession.json", {}).then(function(resp){
//             axios.get(URL+"/GetEnvironmentFileList.json", {
//                 params:{
//                     SessionId: sessionID
//                 }
//             });
//         });


//     }
    
//     render() {
//         <AppContext.AppProvider value={{state: this.state}}>
//             {this.props.children}
//         </AppContext.AppProvider>
//     }
// }