<template>
  <Header />
  <router-view />

  <UpdateTaskModal />
</template>

<script>
import Header from "@/components/Header";
import UpdateTaskModal from "@/components/UpdateTaskModal";

import { onMounted } from "vue";
import store from "@/store";

export default {
  components: { Header, UpdateTaskModal },

  setup: function () {
    onMounted(() => {
      store.dispatch("initTasksDataToStore", localStorage.taskList || "[]");
    });
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .n-text {
    display: block;
    text-align: left;
    margin-bottom: 12px;
  }

  .router-link-exact-active {
    color: #18a058;
  }
}
</style>
