<template>
  <h2>Vue2 ToDoList</h2>
  <div class="area">
    <div class="input">
      <input v-model="inputTitle" placeholder="タスクタイトル" />
    </div>
    <div class="input">
      <textarea v-model="inputValue" placeholder="タスク内容" type="text" />
    </div>
    <div class="input">
      <button @click="handleClick">追加</button>
    </div>
  </div>
  <div class="area">
    <input v-model="filterValue" placeholder="テキスト検索" />
  </div>
  <div class="area">
    <div :title="todo.text" v-for="todo in filteredTodoItems" :key="todo.id">
      <todoItem :todo="todo" @toggle="todo.done = !todo.done" />
    </div>
  </div>
</template>

<script>
import todoItem from "../ToDoItem.vue";
export default {
  components: {
    todoItem,
  },
  data() {
    return {
      inputValue: "",
      todoItems: [],
      filterValue: "",
      inputTitle: "",
    };
  },
  methods: {
    handleClick() {
      const inputObject = {
        id: this.todoItems.length + 1,
        title: this.inputTitle,
        value: this.inputValue,
        done: false,
      };
      this.todoItems.push(inputObject);
    },
  },
  computed: {
    filteredTodoItems() {
      if (!this.filterValue) {
        return this.todoItems;
      }
      return this.todoItems.filter((todo) => {
        return todo.title.includes(this.filterValue);
      });
    },
  },
};
</script>

<style scoped>
.area {
  margin: 0px 0px 50px 0px;
}

.input {
  margin: 0px 0px 10px 0px;
}
</style>
