<template>
  <n-button @click="showModal = true">Dodaj zadanie</n-button>
  <n-modal v-model:show="showModal" preset="card" title="Dialog">
    <template #header>
      <div>Dodaj nowe zadanie</div>
    </template>

    <n-form
      ref="formRef"
      :label-width="80"
      :model="formValue"
      :rules="rules"
      :size="size"
      inline
    >
      <n-form-item label="Name" path="user.name">
        <n-input v-model:value="formValue.user.name" placeholder="Input Name" />
      </n-form-item>
      <n-form-item label="Age" path="user.age">
        <n-input v-model:value="formValue.user.age" placeholder="Input Age" />
      </n-form-item>
      <n-form-item label="Phone" path="phone">
        <n-input v-model:value="formValue.phone" placeholder="Phone Number" />
      </n-form-item>
      <n-form-item>
        <n-button @click="handleValidateClick"> Validate </n-button>
      </n-form-item>
    </n-form>

    <template #action>
      <div>action</div>
    </template>
  </n-modal>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const formRef = ref(1);

    return {
      showModal: ref(false),
      formRef,
      size: ref("medium"),
      formValue: ref({
        user: {
          name: "",
          age: "",
        },
        phone: "",
      }),
      rules: {
        user: {
          name: {
            required: true,
            message: "Please input your name",
            trigger: "blur",
          },
          age: {
            required: true,
            message: "Please input your age",
            trigger: ["input", "blur"],
          },
        },
        phone: {
          required: true,
          message: "Please input your number",
          trigger: ["input"],
        },
      },
      handleValidateClick(e) {
        e.preventDefault();
        formRef.value?.validate((errors) => {
          if (!errors) {
            // message.success("Valid");
          } else {
            console.log(errors);
            // message.error("Invalid");
          }
        });
      },
    };
  },
});
</script>
