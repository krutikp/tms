package org.tms.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Entity
@Data
@Table(name = "TASKS_TBL")
public class TaskData {
     @Id
     @GeneratedValue(strategy= GenerationType.AUTO)
     @Column(name = "task_id" , nullable = false)
     int taskid;

     @Column(name = "title" , nullable = false)
     @NotBlank(message = "Title can not be empty.")
     String title;

     @Column(name = "description" , nullable = false)
     @NotBlank(message = "desc can not be empty.")
     String desc;

     @Column(name="status_id", nullable =false)
     @NotBlank(message = "status must be provided.")
     int statusId;

     @OneToOne(fetch = FetchType.LAZY)
     @JoinColumn(name = "status_id", referencedColumnName = "status_id", insertable=false, updatable=false)
     @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
     Status status;


}
