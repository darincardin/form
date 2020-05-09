# form
Form using React and Webpack
This library provides a form widget for use with your project. 

Library can be installed by adding this line to package.json dependancies:
```js
"form": "darincardin/form#1.1.4",
```

The widget can then be included in the project like this:

```jsx
import Form from 'form'; 

var state = { object: {} }	
	
var inputs = [ 
	{label:"First Name", name:"fName", tag:"Text"},
	{label:"Last Name",  name:"lName", tag:"Text"},
	{label:"Phone",      name:"phone", tag:"Phone"},
]	

var onSuccess = (result)=>{
	console.log(result);
}

<Form  onSuccess={this.onSuccess} object={this.state.order}   inputs={this.inputs}>
  <button type="submit" className="btn btn-primary">Submit</button> 
</Form>
```
