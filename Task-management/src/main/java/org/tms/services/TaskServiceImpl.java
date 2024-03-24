package org.tms.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.tms.TaskRepository;
import org.tms.model.TaskData;

import java.util.List;

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    TaskRepository taskRepository;

    @Override
    public void createTask(TaskData task) throws Exception {

    }

    @Override
    public List<TaskData> fetchAllTask() {
        return taskRepository.findAll();
    }

    @Override
    public TaskData fetchTask(int taskId) throws Exception {
        return taskRepository.findById(taskId).orElseThrow(()-> new Exception("Not found"));
    }
}
