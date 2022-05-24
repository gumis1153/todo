<template>
  <n-data-table :columns="columns" :data="tableData" :row-props="rowProps" />
</template>

<script>
import Modal from "@/components/Modal";
import store from "@/store";

import { defineComponent, h, onMounted, ref, computed } from "vue";
import { NTag } from "naive-ui";

const rowProps = (row) => {
  return {
    style: "cursor: pointer;",
    onClick: () => {
      console.log(row);
    },
  };
};

const columns = [
  {
    type: "selection",
    // TODO: ogarnięcie
    // eslint-disable-next-line no-unused-vars
    disabled(row, index) {
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
    render(row) {
      const { priority } = row;

      if (priority !== null) {
        const type =
          priority === "low" ? "" : priority === "medium" ? "warning" : "error";

        return h(
          NTag,
          {
            style: {
              marginRight: "6px",
            },
            type: type,
          },
          {
            default: () =>
              priority.charAt(0).toUpperCase() + priority.substring(1),
          }
        );
      } else return "";
    },
  },
  {
    title: "Complete date",
    key: "completeDate",
    render(row) {
      const { completeDate } = row;

      if (completeDate !== null) {
        const dateObject = new Date(completeDate);
        const day = dateObject.getDate();
        const month = dateObject.getMonth() + 1;
        const year = dateObject.getFullYear();
        const fullDate = `${day}.${month}.${year}`;
        const type =
          +new Date() >= +dateObject
            ? "error"
            : +new Date() + 86400000 >= +dateObject
            ? "warning"
            : "";

        return h(
          NTag,
          {
            style: {
              marginRight: "6px",
            },
            type: type,
          },
          {
            default: () => fullDate,
          }
        );
      } else return "";
    },
  },
  {
    title: "Completed",
    key: "completed",
  },
];

export default defineComponent({
  // eslint-disable-next-line vue/no-unused-components
  components: { Modal },
  props: {
    tasks: Array,
  },

  setup: function () {
    const checkedRowKeysRef = ref([]);

    onMounted(() => {
      const { tasks } = store.state;
      tableData.value = tasks;
    });

    const tableData = computed(() => store.state.tasks);

    return {
      tableData,
      columns,
      checkedRowKeys: checkedRowKeysRef,
      rowProps,
    };
  },
});
</script>
