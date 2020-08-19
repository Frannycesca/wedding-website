
// import React from 'react';
// import { Button } from '@material-ui/core';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";

// //   function Home() {
// //     return <h2>Home</h2>;
// //   }
  
// //   function About() {
// //     return <h2>About</h2>;
// //   }
  
// //   function Users() {
// //     return <h2>Users</h2>;
// //   }

// export default class App extends React.Component {
//     render(){
//   return <Button color="primary">Hello World</Button>;
// //   return (
// //     <Router>
// //       <div>
// //         <nav>
// //           <ul>
// //             <li>
// //               <Link to="/">Home</Link>
// //             </li>
// //             <li>
// //               <Link to="/about">About</Link>
// //             </li>
// //             <li>
// //               <Link to="/users">Users</Link>
// //             </li>
// //           </ul>
// //         </nav>

// //         {/* A <Switch> looks through its children <Route>s and
// //             renders the first one that matches the current URL. */}
// //         <Switch>
// //           <Route path="/about">
// //             <About />
// //           </Route>
// //           <Route path="/users">
// //             <Users />
// //           </Route>
// //           <Route path="/">
// //             <Home />
// //           </Route>
// //         </Switch>
// //       </div>
// //     </Router>
// //   );

import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Header from './Navbar.jsx';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
 
class App extends React.Component {
  render () {
    let sections = ["A","B","C","D"]
    return (
      <div>
        <CssBaseline />
      <Container maxWidth="lg">
        <p align="center"> Francesca and Ben's Wedding</p>
        <Header>
          </Header>
      </Container>
      </div>
    );
  }
}
export default App;