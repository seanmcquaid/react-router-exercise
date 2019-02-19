import React, {Component} from 'react'
import {Link} from "react-router-dom";

class BootstrapNavBar extends Component{
	constructor(){
		super();
		this.state = {
			activeLink : ""
		}
	}

	setActiveLink(linkRoute){
		this.setState({
			activeLink: linkRoute
		})
	}

  render(){
    return(
		<nav className="navbar navbar-default navbar-fixed-top">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <a className="navbar-brand">WebSiteName</a>
		    </div>
		    <ul className="nav navbar-nav">
		    	<li><Link onClick={()=>{this.setActiveLink("/home")}}to="/">
						<span className={this.state.activeLink =="/home" ? "active" : ""}>Home
						</span></Link></li>
		      <li><Link onClick={()=>{this.setActiveLink("/about")}} to="/about">About</Link></li>
		      <li><Link onClick={()=>{this.setActiveLink("/images")}} to="/images">Images</Link></li>
		      <li><Link onClick={()=>{this.setActiveLink("/weather")}} to="/weather">Weather</Link></li>
		      <li><Link onClick={()=>{this.setActiveLink("/mayorMessage")}} to="/mayorMessage">Mayor's Message</Link></li>
		    </ul>
		  </div>
		</nav>    
	)
  }
}

export default BootstrapNavBar