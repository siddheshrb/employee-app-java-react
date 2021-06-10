package com.eternity.employeeapi.service;

import com.eternity.employeeapi.dao.EmployeeRepository;
import com.eternity.employeeapi.enums.Department;
import com.eternity.employeeapi.exception.EmployeeNotFoundException;
import com.eternity.employeeapi.model.Employee;
import com.eternity.employeeapi.model.EmployeeError;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.platform.commons.util.StringUtils;
import org.mockito.Mockito;
import org.mockito.internal.util.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class IEmployeeServiceTest {

    @Autowired
    private IEmployeeService employeeService;

    @MockBean
    private EmployeeRepository employeeRepository;

    @BeforeEach
    void setUp() {
        Employee employee = Employee.builder()
                            .id(5)
                            .name("Jack")
                            .department(Department.IT)
                            .salary(210000.00)
                            .build();

        Mockito.when(employeeRepository.findById(5))
                .thenReturn(java.util.Optional.ofNullable(employee)).thenThrow(new EmployeeNotFoundException());
    }

    @Test
    public void whenValidEmployeeId_thenEmployeeShouldBeFound() {
        Integer employeeId = 5;
        Employee employee = employeeService.getOneEmployee(employeeId);

        assertEquals(employeeId, employee.getId());
    }

    @Test
    public void whenInvalidEmployeeId_thenEmployeeShouldNotBeFound() {
        Integer employeeId = 1;

        try {
            Employee employee = employeeService.getOneEmployee(employeeId);
        } catch (Exception exception) {
            assertTrue(StringUtils.isNotBlank(exception.getMessage()));
        }
    }



}