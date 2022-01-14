import { useState } from 'react';

// Function need to start with capital letter
function Todo(props){
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    function alertIt(){
        alert("This is a test");
    }
    return(
        <div>
            <h2>{props.text}</h2><br/>
            <button onClick={()=>{alert("Hello")}}>Alert</button>
            <button onClick={alertIt}>Alert 2</button>
        </div>
    );
}

export default Todo;