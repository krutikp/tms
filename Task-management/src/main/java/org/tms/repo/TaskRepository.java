package org.tms.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.tms.model.TaskData;

public interface TaskRepository  extends JpaRepository<TaskData,Integer> {
}
