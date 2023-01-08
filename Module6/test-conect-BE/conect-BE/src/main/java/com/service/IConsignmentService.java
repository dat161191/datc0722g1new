package com.service;

import com.model.Consignment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IConsignmentService {
    Page<Consignment> getList(Pageable pageable);

    void save(Consignment consignment);
    void remove(Integer id);

    Consignment findById(Integer id);
}
