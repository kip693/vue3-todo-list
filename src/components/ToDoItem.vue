<template>
  <div :class="{ done: props.todo.done }" class="todo-item">
    <div>
      <transition name="fade">
        <span v-if="props.todo.done" class="check">✅</span>
      </transition>
      <a :href="props.todo.link" target="_blank" class="todo-title">
        {{ props.todo.title }}
      </a>
    </div>
    <div class="todo-value">
      <span class="category">{{ props.todo.category }}</span>
      {{ props.todo.value }}
    </div>
    <el-button @click="toggle">Check</el-button>
    <el-button @click="deleteTodo">Delete</el-button>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from "vue";
import { ElButton } from "element-plus";
const props = defineProps<{
  todo: any;
}>();
const emit = defineEmits(["toggle", "deleteTodo"]);
const toggle = () => {
  emit("toggle", props.todo.id);
};
const deleteTodo = () => {
  emit("deleteTodo", props.todo.id);
};
</script>

<style scoped>
.todo-item {
  margin: 0px 0px 15px 0px;
  cursor: pointer;
  padding: 10px;
}

.check {
  margin-right: 10px;
}

.todo-item.done {
  background-color: #53a8ff;
  color: #fff;
}

.todo-title {
  font-size: 24px;
  font-weight: bold;
}

.todo-value {
  font-size: 18px;
  margin: 10px 0px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.category {
  color: rgb(109, 109, 109);
  font-size: 15px;
}
</style>
