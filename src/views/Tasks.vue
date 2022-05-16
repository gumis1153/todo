<template>
  <div class="list">
    <h1>This is an list page</h1>

    <Modal />
    <Table :tasks="tasks" />
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import db from "../database/tasks.js";

export default defineComponent({
  setup() {
    const tasks = ref([]);

    // fake fetch
    const fetchFromDb = () => {
      return db;
    };

    onMounted(() => {
      tasks.value = fetchFromDb();
    });

    return {
      tasks,
    };
  },
});
</script>
