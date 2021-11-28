import { createStore } from "vuex";

const store = createStore({
  state: {
    todo: {
      id: "",
      title: "",
      value: "",
      link: "",
      done: false,
      category: "",
    },
    name: {
      title: "",
    },
    // TODO あとでTSにして型つけする
    todoItems: [],
  },
  actions: {
    async getTodo() {
      const res = await fetch("http://localhost:3002/api/todo/get", {
        method: "GET",
      });
      console.log("teter", res);
      res.forEach((data) => {
        setTodo(state, data);
      });
    },
  },
  mutations: {
    setTodo(state, todo) {
      state.id = todo.id;
      state.todo.title = todo.title;
      state.todo.value = todo.value;
      state.todo.done = todo.done;
    },
    addTodo(state, todo) {
      state.todoItems = [...state.todoItems, todo];
      console.log(todo);
      const res = fetch("http://localhost:3002/api/todo/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });
      console.log(res);
    },
    setDone(state, value) {
      const targetTodo = state.todoItems.filter((todo) => {
        return todo.id === value.id;
      });
      console.log(targetTodo);
      targetTodo.done = value.done;
    },
    setName(state, name) {
      state.name = name;
    },
  },
});

export default store;
