import React,{useState} from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import ToDoForm from './ToDoForm';
import { Typography } from '@material-ui/core';
import ToDoList from './ToDoList';

const App = () => {
    const [todos,settodos] = useState([]);
    return (
        <div className="App">
            <Typography component="h1" variant="h2">
                ToDos
            </Typography>

            <ToDoForm savetodo={(todoText) => {
                const trimmedText = todoText.trim();

                if(trimmedText.length > 0){
                    settodos([...todos,trimmedText]);
                }
            }}/>
            <ToDoList todos={todos}
                      deletetodos = {(todoindex) => {
                          const newTodos = todos.filter((_,index) => index !== todoindex);
                          settodos(newTodos);
                      }}  
            />
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById('root'));