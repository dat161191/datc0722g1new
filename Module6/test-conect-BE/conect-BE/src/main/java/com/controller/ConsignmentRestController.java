package com.controller;

import com.model.Consignment;
import com.model.Product;
import com.service.IConsignmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("consignment")
public class ConsignmentRestController {
    @Autowired
    private IConsignmentService consignmentService;

    @GetMapping("")
    public ResponseEntity<Page<Consignment>> display(@PageableDefault(size = 100) Pageable pageable) {
        Page<Consignment> consignments = consignmentService.getList(pageable);
        if (consignments.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(consignments, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Consignment> create(@RequestBody Consignment consignment) {
        if (consignment.isDeleted()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        consignmentService.save(consignment);
        return new ResponseEntity<>(consignment, HttpStatus.OK);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Consignment> update(@RequestBody Consignment consignment) {
        if (consignment.isDeleted()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        consignmentService.save(consignment);
        return new ResponseEntity<>(consignment, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Consignment> deletePackage(@PathVariable("id") Integer id) {
        Consignment consignment = consignmentService.findById(id);
        if (consignment == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        consignmentService.remove(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
