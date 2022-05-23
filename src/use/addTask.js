export default function addTask(data) {
  const { title, description, completeDate, priority } = data;

  const item = {
    id:
      localStorage.getItem("taskList") === null
        ? 1
        : JSON.parse(localStorage.getItem("taskList")).length + 1,
    title,
    description,
    completeDate,
    priority,
  };

  if (localStorage.getItem("taskList") === null) {
    localStorage.setItem("taskList", JSON.stringify([item]));
  } else {
    let tasks = localStorage.getItem("taskList");
    tasks = JSON.parse(tasks);
    tasks = [...tasks, item];
    localStorage.setItem("taskList", JSON.stringify(tasks));
  }
}
