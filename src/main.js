import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Table from "@/components/Table";
import { NButton, NDataTable, NForm, NInput, NModal, NLayout, NMenu, NGridItem, NGrid } from "naive-ui";

const application = createApp(App);

// register global naive ui components
application
  .component("Table", Table)
  .component("NDataTable", NDataTable)
  .component("NButton", NButton)
  .component("NModal", NModal)
  .component("NForm", NForm)
  .component("NInput", NInput)
  .component("NMenu", NMenu)
  .component("NLayout", NLayout)
  .component("NGrid", NGrid)
  .component("NGridItem", NGridItem);

application.use(store).use(router).mount("#app");
