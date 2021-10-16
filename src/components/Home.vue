<template>
  <Vue3ToDoList />
</template>

<script>
import ToDoList from "./misc/ToDoList.vue";
import NewList from "./misc/NewList.vue";
import ModalParent from "./misc/ModalParent.vue";
import Counter from "./misc/Counter.vue";
import Vue3ToDoList from "./Vue3TodoList.vue";
export default {
  name: "App",
  components: {
    Vue3ToDoList,
  },
  computed: {
    test() {
      console.log("computed");
    },
  },
};
</script>
