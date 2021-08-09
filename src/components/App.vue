<template>
  <Base>
    <Vue3ToDoList :test="test" />
    <NewList />
    <ModalParent />
    <Counter />
  </Base>
</template>

<script>
import ToDoList from "./ToDoList.vue";
import NewList from "./NewList.vue";
import Base from "./Base.vue";
import ModalParent from "./ModalParent.vue";
import Counter from "./Counter.vue";
import Vue3ToDoList from "./Vue3TodoList.vue";
console.log("This is App");
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
  computed: {
    test() {
      console.log("computed");
    },
  },
};
</script>
