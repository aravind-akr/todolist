import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';

const ToDoForm = ({ savetodo }) => {
    const [value,setvalue] = useState('')
    return(
      <form onSubmit={(event) => {
          event.preventDefault();
          savetodo(value);
          setvalue('');
      }}>
          <TextField variant="outlined" 
          placeholder="Add your to-do item" 
          margin="normal"
          onChange={(event)=>{setvalue(event.target.value);
        }}
        value={value}
          />
      </form>  
    );
};

export default ToDoForm;
