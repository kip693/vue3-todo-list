<template>
  <Base>
    <Vue3ToDoList />
    <NewList />
    <ModalParent />
    <Counter />
  </Base>
</template>

<script>
import ToDoList from "./components/ToDoList.vue";
import NewList from "./components/NewList.vue";
import Base from "./components/Base.vue";
import ModalParent from "./components/ModalParent.vue";
import Counter from "./components/Counter.vue";
import Vue3ToDoList from "./components/Vue3TodoList.vue";

export default {
  name: "App",
  components: {
    NewList,
    ToDoList,
    Base,
    ModalParent,
    Counter,
    Vue3ToDoList,
  },
};
</script>
