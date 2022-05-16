<template>
  <n-data-table
      :columns="columns"
      :data="data"
      :pagination="pagination"
      :row-key="(row) => row.address"
      @update:checked-row-keys="handleCheck"
  />
</template>

<script>
import {defineComponent, ref, h, watch} from "vue";
import {NButton} from "naive-ui";

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
    title: "Created",
    key: "created",
  },
  {
    title: "Completed",
    key: "completed",
    render() {
      return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: "small",
            // select completed
            onClick: () => console.log("playing..."),
          },
          {default: () => "Completed"}
      );
    },
  },
];

export default defineComponent({
  props: {
    tasks: Array,
  },

  setup(props) {
    const checkedRowKeysRef = ref([]);
    const data = ref([]);

    watch(() => {
      data.value = props.tasks;
    });

    return {
      data,
      columns,
      checkedRowKeys: checkedRowKeysRef,
      pagination: {
        pageSize: 5,
      },
      handleCheck(rowKeys) {
        checkedRowKeysRef.value = rowKeys;
      },
    };
  },
});
</script>
