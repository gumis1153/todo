<template>
  <n-data-table :columns="columns" :data="tableData" />
</template>

<script>

// eslint-disable-next-line no-unused-vars
import { defineComponent, ref, h, watch, onMounted } from "vue";

const columns = [
  {
    type: "selection",
    // TODO: ogarnięcie
    disabled(row, index) {
      console.log(row);
      console.log(index);
      return row.name === "Edward King 3";
    },
  },
  {
    title: "Title",
    key: "title",
  },
  {
    title: "Priority",
    key: "priority",
  },
  {
    title: "Task date",
    key: "taskDate",
  },
  {
    title: "Completed",
    key: "completed",
  },
];

export default defineComponent({
  props: {
    tasks: Array,
  },

  setup: function () {
    const checkedRowKeysRef = ref([]);
    const tableData = ref([]);

    onMounted(() => {
      tableData.value = localStorage.taskList ? JSON.parse(localStorage.taskList) : [];
    });

    // todo: ogarnięcie watchera na localStorage
    watch(localStorage, () => {
      tableData.value = JSON.parse(localStorage.taskList);
    });

    return {
      tableData,
      columns,
      checkedRowKeys: checkedRowKeysRef,
    };
  },
});
</script>
