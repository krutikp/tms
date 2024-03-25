package org.tms.services;

import org.tms.model.TaskData;

import java.util.List;

public interface TaskService {

    void createTask(TaskData task)throws Exception;

    List<TaskData> fetchAllTask();

    TaskData fetchTask(int taskId) throws Exception;

    void removeTask(int taskId) throws Exception;

}
