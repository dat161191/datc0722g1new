package com.service;

import com.model.Consignment;
import com.repository.IConsignmentRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ConsignmentService implements IConsignmentService {
    private final IConsignmentRepository consignmentRepository;

    public ConsignmentService(IConsignmentRepository consignmentRepository) {
        this.consignmentRepository = consignmentRepository;
    }

    @Override
    public Page<Consignment> getList(Pageable pageable) {
        return consignmentRepository.getList(pageable);
    }

    @Override
    public void save(Consignment consignment) {
        consignmentRepository.save(consignment);
    }
}
