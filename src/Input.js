import React, {Component} from 'react';
import { Input, Button } from 'semantic-ui-react'

const InputBar = (props) => {

	return <div style={props.style.input}className="to-do">
			<Input 
				value={ props.value } 
				style={ props.style.inputBar } 
				onChange={ props.input } 
				className="to-do__input"/>
			<Button onClick={props.submit} className="to-do__submit"> Submit </Button>
		</div>
}

export default InputBar;