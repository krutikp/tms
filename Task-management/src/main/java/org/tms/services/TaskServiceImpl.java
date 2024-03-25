package org.tms.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.tms.repo.TaskRepository;
import org.tms.model.TaskData;

import java.util.List;

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    TaskRepository taskRepository;

    @Override
    public void createTask(TaskData task) throws Exception {
        taskRepository.save(task);
    }

    @Override
    public List<TaskData> fetchAllTask() {
        return taskRepository.findAll();
    }

    @Override
    public TaskData fetchTask(int taskId) throws Exception {
        return taskRepository.findById(taskId).orElseThrow(()-> new Exception("Not found"));
    }

    @Override
    public void removeTask(int taskId) throws Exception {

        taskRepository.deleteById(taskId);
    }

    @Override
    public void updateTask(TaskData task) throws Exception {
        TaskData toupdate= taskRepository.getReferenceById(task.getTaskid());
        toupdate.setStatusId(task.getStatusId());
        taskRepository.save(toupdate);

    }


}
