import React from 'react'
import Nav from '../components/Nav'

function Layout(props) {
    return (
      <div className="App">
        <Nav />
        {props.children}
      </div>
    );
  }
  
  export default Layout;