import React, {Fragment, useState} from "react";
import TodoItem from "./TodoItem.js";

function Todos(){
    const [todosState, setTodosState] = useState(['việc 1', 'việc 2', 'việc 3'])

    return(
        <Fragment>
            {todosState.map(todo =>{
                return <TodoItem />
            })}
        </Fragment>
    )
}

export default Todos