<template>
  <n-menu :options="menuOptions" mode="horizontal"/>
</template>

<script>
import {defineComponent, h} from "vue";
import {NIcon, NMenu} from "naive-ui";
import {RouterLink} from "vue-router";
import {HomeOutline, LogInOutline} from "@vicons/ionicons5";
import {TasksApp24Regular} from "@vicons/fluent";

function renderIcon(icon) {
  return () => h(NIcon, null, {default: () => h(icon)});
}

const menuOptions = [
  {
    label: () =>
        h(RouterLink, {
              to: "/",
            }, "Home"
        ),
    key: "home",
    icon: renderIcon(HomeOutline),
  },
  {
    label: () =>
        h(RouterLink, {
              to: "/tasks",
            }, "Tasks"
        ),
    key: "tasks",
    icon: renderIcon(TasksApp24Regular),
  },
  {
    label: () =>
        h(RouterLink, {
              to: "/login",
            }, "Login"
        ),
    key: "login",
    icon: renderIcon(LogInOutline),
  },
];

export default defineComponent({
  components: {
    NMenu,
  },

  setup() {
    return {
      menuOptions,
    };
  },
});
</script>
