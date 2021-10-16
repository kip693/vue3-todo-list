<template>
  <h2>Vue3 ToDoList</h2>
  <ToDoAdder @add-todo="addTodo" />
  <div class="area">
    <el-input v-model="filterValue" placeholder="テキスト検索" />
  </div>
  <div class="area">
    <div :title="todo.text" v-for="todo in filteredTodoItems" :key="todo.id">
      <TodoItem :todo="todo" @toggle="toggle" @deleteTodo="deleteTodo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { ElInput } from "element-plus";
import TodoItem from "./ToDoItem.vue";
import ToDoAdder from "./ToDoAdder.vue";
import { useStore } from "vuex";
/* DefaultData */
const store = useStore();

const todoItems = reactive([]);
const todoState = computed(() => {
  return store.state.todo;
});

const addTodo = (value: object) => {
  const newTodo = value;
  todoItems.push(newTodo);
  store.commit("addTodo", newTodo);
};

const deleteTodo = (id) => {
  console.log("delete", id);
  // TODO IDをdatabaseに繋いでhashにしたら実装する
};

/* Toggle Method */
const toggle = (id) => {
  const target = todoItems[id - 1];
  target.done = !target.done;
  store.commit("setDone", target);
};

/* Filter作業 */
const filterValue = ref("");
const filteredTodoItems = computed(() => {
  if (!filterValue.value) {
    return todoItems;
  }
  return todoItems.filter((todo) => todo.title.includes(filterValue.value));
});
</script>

<style scoped>
.area {
  margin: 0px 0px 50px 0px;
}

.input {
  margin: 0px 0px 10px 0px;
}
</style>
