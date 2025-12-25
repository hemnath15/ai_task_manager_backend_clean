import { Request, Response } from "express";
import Task from "../models/task.model";

// CREATE
export const createTask = async (req: any, res: Response) => {
  const task = await Task.create({
    ...req.body,
    user: req.user.id,
  });

  res.status(201).json(task);
};

// READ ALL
export const getTasks = async (req: Request, res: Response) => {
  const tasks = await Task.find();
  res.json(tasks);
};

// READ ONE
export const getTaskById = async (req: Request, res: Response) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
};

// UPDATE
export const updateTask = async (req: Request, res: Response) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(task);
};

// DELETE
export const deleteTask = async (req: Request, res: Response) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted successfully" });
};
