import { createStore } from "vuex";

export default createStore({
  state: {
    tasks: [],
  },
  mutations: {
    updateTasks(state, newTask) {
      state.tasks.push(newTask);
    },
  },
  actions: {
    initTasksDataToStore(context, data) {
      const parsedData = JSON.parse(data);

      parsedData.forEach((item) => {
        context.commit("updateTasks", item);
      });
    },
    updateTask: function (context, task) {
      const { title, description, completeDate, priority } = task;

      context.commit("updateTasks", {
        title,
        description,
        completeDate,
        priority,
      });
      context.dispatch("updateLocalStorage");
    },
    updateLocalStorage(context) {
      localStorage.removeItem("taskList");
      localStorage.setItem("taskList", JSON.stringify(context.state.tasks));
    },
  },
  modules: {},
});
