package org.tms.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.tms.model.Status;

public interface StatusRepository extends JpaRepository<Status,Integer> {
}
