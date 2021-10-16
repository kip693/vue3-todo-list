<template>
  <button @click="up">+1</button>
  Click Count: {{ state.count }}
</template>
<script>
import { reactive } from "vue";
export default {
  setup() {
    const state = reactive({
      count: 0,
    });
    const up = () => state.count++;
    return {
      state,
      up,
    };
  },
};
</script>
