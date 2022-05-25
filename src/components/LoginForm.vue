<template>
  <div class="login">
    <n-form :model="formValue" label-placement="left">
      <n-form-item>
        <n-input
          v-model:value="formValue.login.value"
          :status="!formValue.login.valid ? 'error' : ''"
          placeholder="Login"
        />
      </n-form-item>

      <n-form-item>
        <n-input
          v-model:value="formValue.password.value"
          :status="!formValue.password.valid ? 'error' : ''"
          placeholder="Password"
          type="password"
        />
      </n-form-item>

      <n-form-item>
        <n-button
          type="primary"
          @click="handleValidateButtonClick"
          style="margin: 0 auto"
        >
          Login
        </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<script>
import { NForm, NFormItem, NInput } from "naive-ui";

import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    NForm,
    NFormItem,
    NInput,
  },

  setup() {
    const formValue = ref({
      login: {
        value: "",
        valid: true,
      },
      password: {
        value: "",
        valid: true,
      },
    });

    const handleValidateButtonClick = (e) => {
      e.preventDefault();
      formValue.value.login.valid = formValue.value.login.value.length > 0;
      formValue.value.password.valid =
        formValue.value.password.value.length > 0;

      if (formValue.value.login.valid && formValue.value.password.valid) {
        console.log("Login...");
      }
    };

    return {
      formValue,
      handleValidateButtonClick,
    };
  },
});
</script>
