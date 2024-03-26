package org.tms;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.tms.controller.TaskConroller;
import org.tms.model.TaskData;
import org.tms.services.TaskService;

import java.util.Arrays;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@ExtendWith(MockitoExtension.class)
public class TaskControllerTest {

    private MockMvc mockMvc;

    @Mock
    private TaskService taskService;

    @InjectMocks
    private TaskConroller taskController;

    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(taskController).build();
    }

    @Test
    public void testFetchTaskById() throws Exception {
        int taskId = 1;
        TaskData taskData = new TaskData();
        taskData.setTaskid(taskId);
        when(taskService.fetchTask(taskId)).thenReturn(taskData);

        mockMvc.perform(get("/api/task/{id}", taskId))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.taskid").value(taskId));
    }

    @Test
    public void testFetchAllTasks() throws Exception {
        TaskData task1 = new TaskData();
        task1.setTaskid(1);
        TaskData task2 = new TaskData();
        task2.setTaskid(2);
        when(taskService.fetchAllTask()).thenReturn(Arrays.asList(task1, task2));

        mockMvc.perform(get("/api/task"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].taskid").value(1))
                .andExpect(jsonPath("$[1].taskid").value(2));
    }

    @Test
    public void testCreateTask() throws Exception {
        TaskData taskData = new TaskData();
        taskData.setTaskid(1);
        taskData.setTitle("Task Name");
        taskData.setStatusId(1);
        taskData.setDesc("test");
        // Mocking the service call
        doNothing().when(taskService).createTask(taskData);

        mockMvc.perform(post("/api/task/create")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"taskid\":1,\"title\":\"Task Name\",\"statusId\":1,\"desc\":\"test\"}"))
                .andExpect(status().isOk());
    }

    @Test
    public void testRemoveTask() throws Exception {
        int taskId = 1;
        // Mocking the service call
        doNothing().when(taskService).removeTask(taskId);

        mockMvc.perform(delete("/api/task/remove/{id}", taskId))
                .andExpect(status().isOk());
    }

    @Test
    public void testUpdateTask() throws Exception {
        TaskData taskData = new TaskData();
        taskData.setTaskid(1);
        taskData.setTitle("Updated Task Name");
        taskData.setStatusId(1);
        taskData.setDesc("test");
        // Mocking the service call
        doNothing().when(taskService).updateTask(taskData);

        mockMvc.perform(put("/api/task/update")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"taskid\":1,\"title\":\"Updated Task Name\",\"statusId\":1,\"desc\":\"test\"}"))
                .andExpect(status().isOk());
    }
}
