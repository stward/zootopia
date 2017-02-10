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
            <li onClick={props.toggleComp.bind(null, 'home')}><a>Home</a></li>
            <li onClick={props.toggleComp.bind(null, 'viewAll')}><a>Animals</a></li>
            <li onClick={props.toggleComp.bind(null, 'post')}><a>Post</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
