import React from 'react';
import {i} from 'semantic-ui-react';

const TodoList = (props) => {
	return 	<ul style={props.style.list}>
			{
				props.todos.map((todo, i) => {
					return<li key={i}>
						<div style={props.style.todoContainer}> 
							<div style={props.style.todoName}>{todo}</div>
							<i value={i} onClick={() => props.handleRemove(i)} style={props.style.todoRemove} className="close link icon"></i>
						</div>
					</li>
				})
    	}
		</ul>
}

export default TodoList;