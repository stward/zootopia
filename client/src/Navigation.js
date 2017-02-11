import React from 'react';
var NavBar = function(props){
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Zootopia</a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><a>Home</a></li>
            <li><a>Animals</a></li>
            <li><a>Post</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
