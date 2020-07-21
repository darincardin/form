import React from 'react';
import Validation from '../Tools/Validation.js';

class Header extends React.Component  {

	getEvent = e =>[e.target.name, e.target.value]
	
	validate = () =>{
		return  ''
	}

	render(){
		return (<td colSpan="2">
					<div className="header">
						<hr /><span>{this.props.label}</span><hr /> 
					</div>
				</td>)
	}
}
export default Header;
