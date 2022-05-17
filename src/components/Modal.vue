<template>
  <n-modal v-model:show="showModal" preset="card" style="width: 90%">
    <template #header>
      <div>Add task</div>
    </template>

    <template #default>
      <slot></slot>
    </template>

    <template #action>
      <div>actions</div>
    </template>
  </n-modal>
</template>

<script>
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  props: {
    isOpen: Boolean,
  },

  // eslint-disable-next-line no-unused-vars
  setup(props, context) {
    const showModal = ref(false);

    watch(
      () => props.isOpen,
      (value) => {
        showModal.value = value;
      }
    );

    // prevent double click on "+" button
    watch(
      () => showModal.value,
      (newValue) => {
        if (!newValue && props.isOpen) context.emit("resetModal");
      }
    );

    return {
      showModal,
    };
  },
});
</script>
