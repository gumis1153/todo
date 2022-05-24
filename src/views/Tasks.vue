<template>
  <div class="list">
    <n-grid cols="12" item-responsive x-gap="24">
      <n-grid-item span="12" style="margin-bottom: 24px">
        <n-h1>
          <n-text style="text-align: center"> Tasks</n-text>
        </n-h1>
      </n-grid-item>

      <n-grid-item offset="0 640:2" span="12 640:8">
        <Table/>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script>
import {defineComponent, ref} from "vue";

export default defineComponent({
  setup() {
    const tasks = ref([]);

    return {
      tasks,
    };
  },
});
</script>
