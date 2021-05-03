package com.eternity.employeeapi.service;

import com.eternity.employeeapi.model.Employee;

import java.util.List;

public interface IEmployeeService {

    Integer saveEmployee(Employee employee);

    List<Employee> getAllEmployees();

    Employee getOneEmployee(Integer id);

    void deleteEmployee(Integer id);

    void updateEmployee(Employee employee);

}
