<template>
  <div @click="toggle" :class="{ done: todo.done }" class="todo-item">
    <div>
      <transition name="fade">
        <span v-if="todo.done">✅</span>
      </transition>
      <span class="todo-title">{{ todo.title }}</span>
    </div>
    <div class="todo-value">
      {{ todo.value }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  emits: ["toggle", "clicked"],
  methods: {
    toggle() {
      this.$emit("toggle");
    },
  },
});
</script>

<style scoped>
.todo-item {
  margin: 0px 0px 15px 0px;
  cursor: pointer;
}

.todo-item.done {
  background-color: #3fb983;
  color: #fff;
}

.todo-title {
  font-size: 24px;
  font-weight: bold;
}

.todo-value {
  font-size: 18px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
