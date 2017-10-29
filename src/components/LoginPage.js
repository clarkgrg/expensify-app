import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

// NOTE: { startLogin } destructured from props
export const LoginPage = ({ startLogin }) => (
    <div>
        <button onClick={startLogin}>Login</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
// export default class LoginPage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             password: '',
//             error: ''
//         };
//     }
//     onUsernameChange = (e) => {
//         const username = e.target.value;
//         this.setState(() => ({ username }));
//     };
//     onPasswordChange = (e) => {
//         const password = e.target.value;
//         this.setState(() => ({ password }));
//     };
//     onSubmit = (e) => {
//         e.preventDefault();
//         if (!this.state.username || !this.state.password) {
//             this.setState(() => ({ error: 'Need to enter username and password!'}));            
//         } else {
//             this.setState(() => ({ error: ''}));
//             this.props.history.push('/dashboard');
//         }
//     };
//     render() {
//         return (
//             <div>
//                 {this.state.error && <p>{this.state.error}</p>}
//                 <form onSubmit={this.onSubmit}>
//                     <input
//                         type="text"
//                         placeholder="Enter username"
//                         autoFocus
//                         value={this.state.username}
//                         onChange={this.onUsernameChange}
//                     />
//                     <input
//                         type="password"
//                         placeholder="Enter password"
//                         value={this.state.password}
//                         onChange={this.onPasswordChange}
//                     />                    
//                     <button>Login</button>
//                 </form>
//             </div>
//         );
//     }
// };
