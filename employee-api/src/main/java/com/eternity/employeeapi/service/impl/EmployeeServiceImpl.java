package com.eternity.employeeapi.service.impl;

import com.eternity.employeeapi.dao.EmployeeRepository;
import com.eternity.employeeapi.exception.EmployeeNotFoundException;
import com.eternity.employeeapi.model.Employee;
import com.eternity.employeeapi.service.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements IEmployeeService {

    @Autowired
    private EmployeeRepository repository;

    @Override
    public Integer saveEmployee(Employee employee) {
        Integer id = repository.save(employee).getId();
        return id;
    }

    @Override
    public List<Employee> getAllEmployees() {
        List<Employee> employeeList = repository.findAll();
        return employeeList;
    }

    @Override
    public Employee getOneEmployee(Integer id) {
        Employee employee = repository.findById(id).orElseThrow(() -> new EmployeeNotFoundException("Employee does not exist"));
        return employee;
    }

    @Override
    public void deleteEmployee(Integer id) {
        Employee employee = getOneEmployee(id);
        repository.delete(employee);
    }
}
