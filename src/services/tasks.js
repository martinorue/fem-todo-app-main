import { initialTasks } from '../data'

function getTasks () {
  return JSON.parse(localStorage.getItem('tasks')) ?? initialTasks
}

function saveTasks (tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

export { getTasks, saveTasks }
