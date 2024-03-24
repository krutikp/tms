package org.tms.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.tms.model.Status;
import org.tms.repo.StatusRepository;

import java.util.List;
@Service
public class StatusServiceImpl implements  StatusService{

    @Autowired
    StatusRepository statusRepository;

    @Override
    public List<Status> fetchAllStatusData() {
        return statusRepository.findAll();
    }
}
