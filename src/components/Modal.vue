<template>
  <n-modal v-model:show="showModal" preset="card" style="width: 90%">
    <template #header>
      <slot name="header"></slot>
    </template>

    <template #default>
      <slot name="default"></slot>
    </template>

    <template #action>
      <slot name="action"></slot>
    </template>
  </n-modal>
</template>

<script>
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  props: {
    isOpen: Boolean,
  },

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
