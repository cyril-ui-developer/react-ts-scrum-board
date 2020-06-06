import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './style.css';
import { AppStateProvider } from "./AppStateContext"

interface AppProps { }
interface AppState {
  name: string;
}

// class App extends Component<AppProps, AppState> {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'React'
//     };
//   }

//   render() {
//     return (
//       <div>
//         <App />
//         <p>
//           Start editing to see some magic happen :)
//         </p>
//       </div>
//     );
//   }
// }

render(<AppStateProvider><App /></AppStateProvider>, document.getElementById('root'));
