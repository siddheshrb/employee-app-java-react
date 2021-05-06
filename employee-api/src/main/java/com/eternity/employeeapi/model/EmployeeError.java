package com.eternity.employeeapi.model;

import lombok.Data;
import org.springframework.http.HttpStatus;

@Data
public class EmployeeError {

    private HttpStatus status;
    private String timeStamp;
    private Integer errorCode;
    private String error;

}
