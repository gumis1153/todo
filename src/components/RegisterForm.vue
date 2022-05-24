<template>
  <div class="register">
    <n-form
      :model="formValue"
      label-placement="left"
    >
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
        <n-input
          v-model:value="formValue.repeatPassword.value"
          :status="!formValue.repeatPassword.valid ? 'error' : ''"
          placeholder="Repeat password"
          type="password"
        />
      </n-form-item>

      <n-form-item style="display: block; width: 100%">
        <n-button
          type="primary"
          @click="handleValidateButtonClick"
          style="margin: 0 auto"
        >
          Register
        </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<script>
import { NForm, NFormItem, NInput, NGi } from "naive-ui";

import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    NForm,
    NFormItem,
    NInput,
    // eslint-disable-next-line vue/no-unused-components
    NGi,
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
      repeatPassword: {
        value: "",
        valid: true,
      },
    });

    const handleValidateButtonClick = (e) => {
      e.preventDefault();
      formValue.value.login.valid = formValue.value.login.value.length > 3;

      const passwordRegularExpression =
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      formValue.value.password.valid = passwordRegularExpression.test(
        formValue.value.password.value
      );

      formValue.value.repeatPassword.valid =
        formValue.value.password.valid &&
        formValue.value.password.value === formValue.value.repeatPassword.value;

      if (
        formValue.value.login.valid &&
        formValue.value.password.valid &&
        formValue.value.repeatPassword.valid
      ) {
        console.log("Register..");
      }
    };

    return {
      formValue,
      handleValidateButtonClick,
    };
  },
});
</script>
