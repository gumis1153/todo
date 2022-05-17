<template>
  <div class="list">
    <h1>This is an list page</h1>

    <Table :tasks="tasks" />
  </div>
</template>

<script>
import db from "../database/tasks.js";

import { defineComponent, ref, onMounted } from "vue";

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
