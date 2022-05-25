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
    async initTasksDataToStore(context, data) {
      const parsedData = JSON.parse(data);

      parsedData.forEach((item) => {
        context.commit("updateTasks", item);
      });
    },
    updateTask(context, task) {
      const { title, description, completeDate, priority } = task;

      context.commit("updateTasks", {
        id: context.state.tasks.length + 1,
        title,
        description,
        completeDate,
        priority,
      });
      context.dispatch("updateLocalStorage");
    },
    removeTask(context, task) {
      context.state.tasks = context.state.tasks.filter(function (item) {
        return item.id !== task.id;
      });
      context.dispatch("updateLocalStorage");
    },
    async updateLocalStorage(context) {
      localStorage.removeItem("taskList");
      localStorage.setItem("taskList", JSON.stringify(context.state.tasks));
    },
  },
  modules: {},
});
