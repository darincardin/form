# form
Simple form using React and Webpack
This library provides a form widget for use with your project. 

Library can be installed by adding this line to package.json dependancies:
```js
"form": "darincardin/form#1.1.5",
```



Widget currently has three input types:
 * Text
 * Phone
 * Number
 
The widget can then be included in the project like this:


```jsx
import Form from 'form'; 

var state = { object: {} }	
	
var inputs = [ 
	{label:"First Name", name:"fName",  tag:"text", required:true},
	{label:"Last Name",  name:"lName",  tag:"text"},
	{label:"Phone",      name:"phone",  tag:"phone"},
	{label:"Amount",     name:"amount", tag:"number"},
]	

var onSuccess = (result)=>{
	console.log(result);
}

<Form  onSuccess={this.onSuccess} object={this.state.order}   inputs={this.inputs}>
  <button type="submit" className="btn btn-primary">Submit</button> 
</Form>
```
