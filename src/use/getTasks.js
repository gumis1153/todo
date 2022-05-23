export default function getTasks() {
  return localStorage.taskList || [];
}
