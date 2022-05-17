<template>
  <div class="register">
    <n-form :model="formValue" inline label-placement="center" size="medium">
      <n-grid cols="1" item-responsive y-gap="24">
        <n-grid-item>
          <n-form-item label="Login" label-width="100%">
            <n-input
              v-model:value="formValue.login.value"
              :status="!formValue.login.valid ? 'error' : ''"
              placeholder="Login"
            />
          </n-form-item>
        </n-grid-item>

        <n-grid-item>
          <n-form-item label="Password">
            <n-input
              v-model:value="formValue.password.value"
              :status="!formValue.password.valid ? 'error' : ''"
              placeholder="Password"
              type="password"
            />
          </n-form-item>
        </n-grid-item>

        <n-grid-item>
          <n-form-item label="Repeat Password">
            <n-input
              v-model:value="formValue.repeatPassword.value"
              :status="!formValue.repeatPassword.valid ? 'error' : ''"
              placeholder="Repeat password"
              type="password"
            />
          </n-form-item>
        </n-grid-item>

        <n-grid-item>
          <n-form-item>
            <n-button type="primary" @click="handleValidateButtonClick">
              Register
            </n-button>
          </n-form-item>
        </n-grid-item>
      </n-grid>
    </n-form>
  </div>
</template>

<script>
import { NForm, NInput } from "naive-ui";

import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    NForm,
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
