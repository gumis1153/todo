import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Table from "@/components/Table";
import { NButton, NDataTable, NForm, NInput, NModal, NLayout, NMenu, NGridItem, NGrid, NH1, NH2, NH3, NUl, NLi, NA, NText } from "naive-ui";

const application = createApp(App);

// register global naive ui components
application
  .component("Table", Table)
  .component("NH1", NH1)
  .component("NH2", NH2)
  .component("NH3", NH3)
  .component("NText", NText)
  .component("NUl", NUl)
  .component("NLi", NLi)
  .component("NA", NA)
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
