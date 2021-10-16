<template>
  <ModalDialog>
    <template v-slot:title>
      <span style="color: red">タイトル</span>
    </template>
    <p>ダイアログの内容内容わーいわい</p>
  </ModalDialog>
</template>
<script>
import ModalDialog from "../misc/ModalDialog.vue";
export default {
  components: {
    ModalDialog,
  },
};
</script>
