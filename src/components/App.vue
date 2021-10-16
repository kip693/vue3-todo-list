<template>
  <Base>
    <router-view />
  </Base>
</template>

<script>
import ToDoList from "./misc/ToDoList.vue";
import NewList from "./misc/NewList.vue";
import Base from "./Base.vue";
import ModalParent from "./misc/ModalParent.vue";
import Counter from "./misc/Counter.vue";
import Vue3ToDoList from "./Vue3TodoList.vue";
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
