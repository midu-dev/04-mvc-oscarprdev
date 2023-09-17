// importar modelo
import { TaskModel } from '../models/task.js'

export const getAllTasks = (req, res) => {
  const tasks = TaskModel.getAllTasks()

  res.status(200).json(tasks)
}

export const addTask = (req, res) => {
  const { description } = req.body
  const task = TaskModel.addTask(description)

  res.status(200).json(task)
}

export const deleteTask = (req, res) => {
  try {
    const { id } = req.params

    TaskModel.deleteTask(id)

    res.status(200).json({ message: 'Deleted successfully' })
  } catch (error) {
    res.status(400).json({ message: error })
  }
}
