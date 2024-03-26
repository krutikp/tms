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
     private int taskid;

     @Column(name = "title" , nullable = false)
     @NotBlank(message = "Title can not be empty.")
     private String title;

     @Column(name = "description" , nullable = false)
     @NotBlank(message = "description can not be empty.")
     private String desc;

     @Column(name="status_id", nullable =false)
     @NotNull
     private int statusId;

     @OneToOne(fetch = FetchType.LAZY)
     @JoinColumn(name = "status_id", referencedColumnName = "status_id", insertable=false, updatable=false)
     @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
     private Status status;

}
