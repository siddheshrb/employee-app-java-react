package com.eternity.employeeapi.service.impl;

import com.eternity.employeeapi.model.Employee;
import com.eternity.employeeapi.service.IEmployeeService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements IEmployeeService {
    @Override
    public Integer saveEmployee(Employee employee) {
        return null;
    }

    @Override
    public List<Employee> getAllEmployees() {
        return null;
    }

    @Override
    public Employee getOneEmployee(Integer id) {
        return null;
    }

    @Override
    public void deleteEmployee(Integer id) {

    }

    @Override
    public void updateEmployee(Employee employee) {

    }
}
