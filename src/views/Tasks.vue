<template>
  <div class="list">
    <n-h1>
      <n-text style="text-align: center"> Tasks </n-text>
    </n-h1>

    <Table />
  </div>
</template>

<script>
import getTasks from "../use/getTasks";

import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  setup() {
    const tasks = ref([]);

    // fake fetch
    const fetchFromDb = () => {
      console.log(getTasks());
      return [];
      // return db;
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
