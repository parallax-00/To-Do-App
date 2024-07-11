import { useContext, createContext } from "react"

export const TodoContext = createContext({
    todos: [{
        todo:"todo messasge",
        id: 1,
        completed:false
    }],
    addTodo: (todo) => { },
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{},
    updateTodo: (id,todo)=>{},
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
