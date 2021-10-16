<template>
  <Base>
    <Counter />
  </Base>
</template>

<script>
import Base from "./Base.vue";
import Counter from "./misc/Counter.vue";

export default {
  name: "Test",
  components: {
    Base,
    Counter,
  },
};
</script>
