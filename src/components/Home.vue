<template>
  <Vue3ToDoList :test="test" />
  <NewList />
  <ModalParent />
  <Counter />
</template>

<script>
import ToDoList from "./ToDoList.vue";
import NewList from "./NewList.vue";
import ModalParent from "./ModalParent.vue";
import Counter from "./Counter.vue";
import Vue3ToDoList from "./Vue3TodoList.vue";
export default {
  name: "App",
  components: {
    NewList,
    ToDoList,
    ModalParent,
    Counter,
    Vue3ToDoList,
  },
  computed: {
    test() {
      console.log("computed");
    },
  },
};
</script>
