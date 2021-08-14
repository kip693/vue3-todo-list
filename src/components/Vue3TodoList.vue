<template>
  <h2>Vue3 ToDoList</h2>
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
import { ref, reactive, computed } from "vue";
import TodoItem from "./ToDoItem.vue";
export default {
  setup() {
    /* DefaultData */
    const todoItems = reactive([]);

    /* Add ToDo */
    const inputTitle = ref("");
    const inputValue = ref("");
    const handleClick = () => {
      const id = todoItems.length + 1;
      todoItems.push({
        id,
        done: false,
        title: inputTitle.value,
        value: inputValue.value,
      });
    };

    /* Filter作業 */
    const filterValue = ref("");
    const filteredTodoItems = computed(() => {
      if (!filterValue.value) {
        return todoItems;
      }
      return todoItems.filter((todo) => todo.title.includes(filterValue.value));
    });
    return {
      inputTitle,
      inputValue,
      handleClick,
      filterValue,
      filteredTodoItems,
    };
  },
  components: {
    TodoItem,
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
