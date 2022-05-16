import { createStore } from "vuex";

export default createStore({
  state: {
    tasks: [],
  },
  mutations: {
    addTask(state, newTask) {
      state.tasks.push(newTask);
    },
  },
  actions: {},
  modules: {},
});
