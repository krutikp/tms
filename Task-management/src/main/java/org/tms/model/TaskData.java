package org.tms.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Entity
@Data
@Table(name = "TASKS_TBL")
public class TaskData {
     @Id
     @GeneratedValue(strategy= GenerationType.IDENTITY)
     @Column(name = "task_id" , updatable = false, nullable = false)
     int taskid;

     @Column(name = "title" , nullable = false)
     @NotBlank(message = "Title can not be empty.")
     String title;

     @Column(name = "description" , nullable = false)
     @NotBlank(message = "description can not be empty.")
     String desc;

     @Column(name="status_id", nullable =false)
     @NotNull
     int statusId;

     @OneToOne(fetch = FetchType.LAZY)
     @JoinColumn(name = "status_id", referencedColumnName = "status_id", insertable=false, updatable=false)
     @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
     Status status;

     public int getTaskid() {
          return taskid;
     }

     public void setTaskid(int taskid) {
          this.taskid = taskid;
     }

     public String getTitle() {
          return title;
     }

     public void setTitle(String title) {
          this.title = title;
     }

     public String getDesc() {
          return desc;
     }

     public void setDesc(String desc) {
          this.desc = desc;
     }

     public int getStatusId() {
          return statusId;
     }

     public void setStatusId(int statusId) {
          this.statusId = statusId;
     }

     public Status getStatus() {
          return status;
     }

     public void setStatus(Status status) {
          this.status = status;
     }
}
