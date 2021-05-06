package com.eternity.employeeapi.controller;

import com.eternity.employeeapi.model.Employee;
import com.eternity.employeeapi.service.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

    @Autowired
    private IEmployeeService service;

    @PostMapping("/save")
    public ResponseEntity<String> saveEmployee(@RequestBody Employee employee) {
        Integer id = service.saveEmployee(employee);
        return new ResponseEntity<String>(
                "Employee '"+id+" 'saved",
                HttpStatus.OK
        );
    }

    @GetMapping("/all")
    public ResponseEntity<List<Employee>> getAllEmployee() {
        List<Employee> list = service.getAllEmployees();
        return new ResponseEntity<>(
                list,
                HttpStatus.OK
        );
    }

    @GetMapping("/one/{id}")
    public ResponseEntity<Employee> getOneEmployee(@PathVariable Integer id) {
        Employee employee = service.getOneEmployee(id);
        return new ResponseEntity<>(employee, HttpStatus.OK);
    }

    //Update

}
