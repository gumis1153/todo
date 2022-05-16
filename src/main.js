import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Table from "@/components/Table";
import Modal from "@/components/Modal";
import { NButton, NDataTable, NForm, NInput, NModal, NLayout, NMenu } from "naive-ui";

const application = createApp(App);

application
  .component("Table", Table)
  .component("Modal", Modal)
  .component("NDataTable", NDataTable)
  .component("NButton", NButton)
  .component("NModal", NModal)
  .component("NForm", NForm)
  .component("NInput", NInput)
  .component("NMenu", NMenu)
  .component("NLayout", NLayout);

application.use(store).use(router).mount("#app");
