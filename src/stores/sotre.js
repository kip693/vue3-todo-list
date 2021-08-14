import {createStore} from 'vuex'

const store = createStore({
    state: {
        todo: {
            id: "",
            title: "",
            value: "",
            done: false,
        },
        name: {
            title: "",
        },
        // TODO あとでTSにして型つけする
        todoItems: [

        ],
    },
    mutations: {
        setTodo(state, todo){
            state.id = todo.id
            state.todo.title = todo.title
            state.todo.value = todo.value
            state.todo.done = todo.done
        },
        addTodo(state, todo) {
            state.todoItems = [...state.todoItems, todo]
        },
        setDone(state, value) {
            const targetTodo = state.todoItems.filter(todo =>{
                return todo.id === value.id
            })
            targetTodo.done = value.done
        },
        setName(state, name) {
            state.name = name
        },
    }
})

export default store
