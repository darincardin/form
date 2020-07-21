import React from 'react';
import Validation from '../Tools/Validation.js';

class Header extends React.Component  {

	getEvent = e =>[e.target.name, e.target.value]
	
	validate = () =>{
		return  ''
	}

	render(){
		return <>
			<td><label className={'control-label'}>{this.props.label}</label></td>
			<td>{this.props.value}</td>
		</>
	}
}
export default Header;
