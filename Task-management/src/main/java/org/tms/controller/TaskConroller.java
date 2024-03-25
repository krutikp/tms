package org.tms.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.tms.model.TaskData;
import org.tms.services.TaskService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/task")
public class TaskConroller {


    @Autowired
    TaskService taskService;

    @GetMapping("{id}")
    public TaskData fetchTask(@PathVariable("id") int taskId)throws Exception{

        return taskService.fetchTask(taskId);

    }

    @GetMapping
    public List<TaskData> fetchTask()throws Exception{

        return taskService.fetchAllTask();

    }

    @PostMapping("/create")
    public void createTask(@Valid @RequestBody TaskData data)throws  Exception{
        taskService.createTask(data);
    }

    @DeleteMapping("/remove/{id}")
    public void removeTask(@PathVariable(name="id") int taskid)throws  Exception{
        taskService.removeTask(taskid);
    }

    @PutMapping("/update")
    public void updateTask(@RequestBody @Valid TaskData data)throws  Exception{
        taskService.updateTask(data);
    }


}
