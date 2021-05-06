package com.eternity.employeeapi.handler;

import com.eternity.employeeapi.exception.EmployeeNotFoundException;
import com.eternity.employeeapi.model.EmployeeError;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.text.SimpleDateFormat;
import java.util.Date;

@RestControllerAdvice
public class CustomExceptionHandler {

    @ExceptionHandler(EmployeeNotFoundException.class)
    public ResponseEntity<EmployeeError> handleEmployeeNotFound(EmployeeNotFoundException exception) {

        EmployeeError error = new EmployeeError();
        error.setStatus(HttpStatus.NOT_FOUND);
        error.setErrorCode(HttpStatus.NOT_FOUND.value());
        error.setError(exception.getMessage());
        error.setTimeStamp(new SimpleDateFormat("E, dd MMM yyyy HH:mm:ss z").format(new Date()));

        return new ResponseEntity<EmployeeError>(error, HttpStatus.NOT_FOUND);
    }
}
