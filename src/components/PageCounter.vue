<template>
  <Base>
    <Counter />
  </Base>
</template>

<script>
import Base from "./Base.vue";
import Counter from "./Counter.vue";
console.log("This is Counter");
export default {
  name: "Test",
  components: {
    Base,
    Counter,
  },
};
</script>
