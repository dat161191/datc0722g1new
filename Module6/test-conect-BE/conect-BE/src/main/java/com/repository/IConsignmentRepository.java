package com.repository;

import com.model.Consignment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface IConsignmentRepository extends JpaRepository<Consignment,Integer> {
    @Query(value = "select * from consignment join product p on p.pro_id = consignment.product_pro_id",countQuery = "select * from consignment join product p on p.pro_id = consignment.product_pro_id",nativeQuery = true)
    Page<Consignment> getList(Pageable pageable);
}
