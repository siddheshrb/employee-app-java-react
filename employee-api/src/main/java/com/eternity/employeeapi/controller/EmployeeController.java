package com.eternity.employeeapi.controller;

import com.eternity.employeeapi.model.Employee;
import com.eternity.employeeapi.service.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

    @Autowired
    private IEmployeeService service;

    //Save
    @PostMapping("/save")
    public ResponseEntity<String> saveEmployee(@RequestBody Employee employee) {
        Integer id = service.saveEmployee(employee);
        return new ResponseEntity<String>("Employee '"+id+" 'saved", HttpStatus.OK);
    }

    //Fetch all


    //Fetch one


    //Delete


    //Update

}
