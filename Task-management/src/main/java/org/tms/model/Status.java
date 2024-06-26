package org.tms.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@Entity
@Table(name="status_Tbl")
public class Status {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "status_id", updatable = false, nullable = false)
    @NotNull
    private int id;
    @Column(name = "statusname", nullable = false)
    private String name;
}
