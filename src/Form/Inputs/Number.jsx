import React from 'react';
import Text from './Text.jsx';



var Number = props=>{
	 return ( <Text type="number" min="1" {...props} required /> ) 	
}

export default Number;

/*
class Number extends React.Component {
	
	render(){ return <Text type="number" name={this.props.name} value={this.props.value} required /> }
}

export default Number;
*/