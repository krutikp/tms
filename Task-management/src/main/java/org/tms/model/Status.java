package org.tms.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="status_Tbl")
public class Status {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name = "status_id", nullable = false)
    int id;
    @Column(name = "statusname", nullable = false)
    String name;
}
