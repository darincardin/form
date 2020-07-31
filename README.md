# form
Simple form using React and Webpack
This library provides a form widget for use with your project. 

Library can be installed by adding this line to package.json dependancies:
```js
"form": "darincardin/form",
```



Widget currently supports these input types:
 * Text
 * Phone
 * Number
 * Select
 * RadioButton
 * Checkbox
 * Select
 * TextArea
 
The widget can then be included in the project like this:


```jsx
import Form from 'form'; 

var state = { object: {} }	
	
var inputs = [ 
	{label:"Order Info", name:"orderInfo", tag:"header" },
	{label:"First Name", name:"fName",     tag:"text", required:true },
	{label:"Info",    	 name:"info", 	   tag:"textarea" },
	{label:"Quantity",   name:"quantity",  tag:"number",  showIf: {target: ['address'], test:v =>v>5 }},
	{label:"Address",    name:"address", tag:"text", required:true },
]	

var onSuccess = (result)=>{
	console.log(result);
}

<Form  onSuccess={this.onSuccess} object={this.state.order}   fields={this.inputs}>
  <button type="submit" className="btn btn-primary">Submit</button> 
</Form>
```

Features:
* Client side validation after a submit
* Bad inputs display an error message on focus
* Phone includes optional formatting
* Inputs can be shown/hidden based on another input value

