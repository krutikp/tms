package org.tms.services;

import org.tms.model.Status;

import java.util.List;

public interface StatusService {

    List<Status> fetchAllStatusData();
}
