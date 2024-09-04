import { useState } from "react";
import { useTodo } from "../context";

function TodoForm() {
    const [todo, setTodo]= useState("")
    const {createTodo} = useTodo();
    const handleSubmit =(e) =>{
        e.preventDefault();
        if(!todo) return;
        createTodo({todo, checked: false});
        setTodo("");
    }
        
    return (
        <form className="flex" onSubmit={handleSubmit}>
            <input
                type="text"
                name="msg"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                onChange={(e)=>setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

