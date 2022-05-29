<template>
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

  <modal :isOpen="newTaskModalOpen">
    <template v-slot:header>Add task</template>

    <template v-slot:default>
      <label>Title</label>
      <n-input
        v-model:value="title"
        :status="!formValid ? 'error' : ''"
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
      <label>Task priority</label>
      <n-select
        v-model:value="priority"
        :options="priorityOptions"
        placeholder="Task priority"
        style="margin-bottom: 12px"
      />
    </template>

    <template v-slot:action>
      <n-button
        secondary
        strong
        style="margin-right: 12px"
        type="primary"
        @click="resetForm"
      >
        Reset
      </n-button>
      <n-button
        :disabled="addingInProgress"
        :loading="addingInProgress"
        type="primary"
        @click="submit"
      >
        Add
      </n-button>
    </template>
  </modal>

  <n-modal
    :closable="false"
    :close-on-esc="false"
    :mask-closable="false"
    :show="successAdd"
    content="Wanna add more tasks?"
    negative-text="No"
    positive-text="Yes"
    preset="dialog"
    title="Task successfully added"
    @positive-click="closeSuccessModal(true)"
    @negative-click="closeSuccessModal"
  />
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { computed, reactive, ref, toRefs } from "vue";
import Modal from "@/components/Modal";
import { NDatePicker, NIcon, NInput, NSelect } from "naive-ui";
import { Add as AddIcon } from "@vicons/ionicons5";
import store from "@/store";

export default {
  components: {
    Modal,
    NInput,
    NSelect,
    NDatePicker,
    AddIcon,
    NIcon,
  },

  // eslint-disable-next-line no-unused-vars
  setup: (props, context) => {
    const newTaskModalOpen = ref(false);
    const formValid = ref(true);
    const addingInProgress = ref(false);
    const successAdd = ref(false);
    const addTaskForm = reactive({
      title: "",
      description: "",
      completeDate: null,
      priority: "low",
    });
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

    const toggleNewTaskModal = () => {
      newTaskModalOpen.value = !newTaskModalOpen.value;
    };

    const resetForm = () => {
      // todo: descructure
      addTaskForm.title = "";
      addTaskForm.description = "";
      addTaskForm.completeDate = null;
      addTaskForm.priority = priorityOptions[0].value;
    };

    const submit = () => {
      addingInProgress.value = true;

      // fake api call
      setTimeout(() => {
        addingInProgress.value = false;

        if (addTaskForm.title.length > 0) {
          store.dispatch("updateTask", addTaskForm);
          successAdd.value = true;
          resetForm();
        } else {
          formValid.value = false;
        }
      }, 400);
    };

    const closeSuccessModal = (closeForm = false) => {
      successAdd.value = false;
      newTaskModalOpen.value = closeForm;
    };

    return {
      ...toRefs(addTaskForm),
      closeSuccessModal,
      submit,
      resetForm,
      priorityOptions,
      successAdd,
      formValid,
      addingInProgress,
      toggleNewTaskModal,
      newTaskModalOpen,
    };
  },
};
</script>
