<template>
  <Header />
  <router-view />

  <n-button
    circle
    style="position: fixed; bottom: 20px; right: 20px"
    type="primary"
    @click="toggleNewTaskModal"
  >
    <template #icon>
      <n-icon>
        <add-icon />
      </n-icon>
    </template>
  </n-button>

  <modal
      :isOpen="newTaskModalOpen"
      @resetModal="resetModal"
  >
    forms
  </modal>
</template>

<script>
import Header from "@/components/Header";
import Modal from "@/components/Modal";

import { NIcon } from "naive-ui";
import { Add as AddIcon } from "@vicons/ionicons5";

import { ref } from "vue";

export default {
  components: { Modal, Header, AddIcon, NIcon },

  setup() {
    const newTaskModalOpen = ref(false);

    const toggleNewTaskModal = () => {
      newTaskModalOpen.value = !newTaskModalOpen.value;
    };

    // eslint-disable-next-line no-unused-vars
    const resetModal = () => {
      newTaskModalOpen.value = false;
    };

    return {
      toggleNewTaskModal,
      newTaskModalOpen,
      resetModal
    };
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
