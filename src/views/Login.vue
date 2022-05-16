<template>
  <div class="login">
    <h1>{{ capitalize(activeGroup) }}</h1>

    <n-button-group size="medium">
      <n-button
        :type="setActiveButton('login')"
        native-focus-behavior="true"
        round
        @click="toggleLogin('login')"
      >
        Login
      </n-button>
      <n-button
        :type="setActiveButton('register')"
        native-focus-behavior="true"
        round
        @click="toggleLogin('register')"
      >
        Register
      </n-button>
    </n-button-group>

    <n-grid cols="12" item-responsive x-gap="24">
      <n-grid-item offset="1 640:3 1024:4" span="10 640:6 1024:4">
        <n-card>
          <keep-alive>
            <component :is="currentTabComponent"></component>
          </keep-alive>
        </n-card>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { defineComponent, ref, computed } from "vue";
// eslint-disable-next-line no-unused-vars
import { NButtonGroup, NButton, NCard, NGrid, NGridItem } from "naive-ui";
import RegisterForm from "@/components/RegisterForm";
import LoginForm from "@/components/LoginForm";

export default defineComponent({
  components: {
    NButton,
    NButtonGroup,
    NCard,
    NGrid,
    NGridItem,
    RegisterForm,
    LoginForm,
  },

  setup() {
    const activeGroup = ref("login");

    const currentTabComponent = computed(() => {
      return activeGroup.value === "login" ? LoginForm : RegisterForm;
    });

    // todo: set it to computed property z przekazywanym argumentem
    const capitalize = (s) => {
      if (typeof s !== "string") return "";
      return s.charAt(0).toUpperCase() + s.slice(1);
    };

    const toggleLogin = (target) => {
      activeGroup.value = target;
    };

    // todo: set it to computed property z przekazywanym argumentem
    const setActiveButton = (target) => {
      return target === activeGroup.value ? "primary" : "";
    };

    return {
      setActiveButton,
      toggleLogin,
      activeGroup,
      capitalize,
      currentTabComponent,
    };
  },
});
</script>
