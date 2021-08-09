import {createStore} from 'vuex'

const store = createStore({
    state: {
        todo: {
            title: "",
            value: "",
            done: false,
        },
    },
    mutations: {
        setTodo(state, todo){
            state.todo = todo
        }
    }
})