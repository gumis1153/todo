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

  <modal :isOpen="newTaskModalOpen" @resetModal="resetModal">
    <template v-slot:header>Add task</template>

    <template v-slot:default>
      <label>Title</label>
      <n-input
        v-model:value="title"
        placeholder="Task title"
        style="margin-bottom: 12px"
        type="text"
      />
      <label>Description (optional)</label>
      <n-input
        v-model:value="description"
        placeholder="Task description"
        style="margin-bottom: 12px"
        type="textarea"
      />
      <label>Task date (optional)</label>
      <n-date-picker
        v-model:value="completeDate"
        clearable
        placeholder="Select task date"
        style="margin-bottom: 12px"
        type="date"
      />
      <label>Task priority (optional)</label>
      <n-select
        v-model:value="priority"
        :options="priorityOptions"
        style="margin-bottom: 12px"
        placeholder="Task priority"
      />
    </template>

    <template v-slot:action>
      <n-button strong secondary type="primary" style="margin-right: 12px">
        Reset
      </n-button>
      <n-button type="primary" style="margin-right: 12px"> Cancel </n-button>
      <n-button type="primary"> Add </n-button>
    </template>
  </modal>
</template>

<script>
import Header from "@/components/Header";
import Modal from "@/components/Modal";

import { NIcon, NInput, NDatePicker, NSelect } from "naive-ui";
import { Add as AddIcon } from "@vicons/ionicons5";

import { ref, reactive, toRefs } from "vue";

export default {
  components: { Modal, Header, AddIcon, NIcon, NInput, NDatePicker, NSelect },

  setup: function () {
    const newTaskModalOpen = ref(false);
    const priorityOptions = reactive([
      {
        label: "Low",
        value: "low",
      },
      {
        label: "Medium",
        value: "medium",
      },
      {
        label: "High",
        value: "high",
      },
    ]);
    const addTaskForm = reactive({
      title: "",
      description: "",
      completeDate: null,
      priority: null,
    });

    const toggleNewTaskModal = () => {
      newTaskModalOpen.value = !newTaskModalOpen.value;
    };

    const resetModal = () => {
      newTaskModalOpen.value = false;
    };

    return {
      ...toRefs(addTaskForm),
      toggleNewTaskModal,
      newTaskModalOpen,
      resetModal,
      priorityOptions,
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
