import { createContext, useContext } from "react";

export const todoContext = createContext({
    todos: [
        {   
            id:"",
            todo:"",
            checked: false
        }
    ],
    createTodo: (todo)=>{},
    deleteTodo: (id)=>{},
    updateTodo: (id, todo)=>{},
    toggleComplete:(id)=>{},
})

export const useTodo = ()=>(useContext(todoContext))
export const TodoProvider = todoContext.Provider