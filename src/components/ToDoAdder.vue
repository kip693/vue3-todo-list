<template>
  <div class="area">
    <div class="input">
      <el-input v-model="inputTitle" placeholder="タスクタイトル" />
    </div>
    <div class="input">
      <el-input v-model="issueLink" placeholder="issueのリンク" />
    </div>
    <div class="input">
      <el-select v-model="category" placeholder="categoryを選択">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <div class="input">
      <el-input type="textarea" v-model="inputValue" placeholder="タスク内容" />
    </div>
    <div class="input">
      <el-button @click="handleClick">追加</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElSelect, ElInput } from "element-plus";
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

/* Add ToDo */
const inputTitle = ref("");
const inputValue = ref("");
const issueLink = ref("");
const emit = defineEmits(["addTodo"]);

const handleClick = () => {
  const todoItems = computed(() => {
    return store.state.todoItems;
  });
  const id = todoItems.value.length + 1;
  const newTodo = {
    id,
    done: false,
    title: inputTitle.value,
    link: issueLink.value,
    value: inputValue.value,
    category: category.value,
  };
  emit("addTodo", newTodo);
};
const category = ref("");
const options = ref([
  {
    value: "FrontEnd",
    label: "FrontEnd",
  },
  {
    value: "BackEnd",
    label: "BackEnd",
  },
]);
</script>

<style scoped>
.area {
  margin: 0px 0px 50px 0px;
}

.input {
  margin: 0px 0px 10px 0px;
}
</style>
