"use strict";
// hire someone
// give them a salary and title and id
// allow raises and promotions
// fire them
Object.defineProperty(exports, "__esModule", { value: true });
exports.printEmployeeInfo = exports.setEmployeeSalary = exports.hirePerson = void 0;
// type set = Partial<Employee>
function generateRandomInteger() {
    return Math.ceil(Math.random() * 100);
}
;
function isNumberInSet(setOfNumbers) {
    return function (number) {
        return setOfNumbers.has(number);
    };
}
;
function generateUniqueRandomNotInSet(setOfNumbers) {
    let candidateNumber = generateRandomInteger();
    if (setOfNumbers.size > 50)
        return -1; // bad error handling, need some monading?
    if (isNumberInSet(setOfNumbers)(candidateNumber))
        candidateNumber = generateRandomInteger(); // check if "IFs" are okay
    setOfNumbers.add(candidateNumber);
    return candidateNumber;
}
;
function hirePerson(setOfNumbers) {
    return function (person) {
        return function (role) {
            return {
                id: generateUniqueRandomNotInSet(setOfNumbers), // we will revisit this
                name: person.name,
                age: person.age,
                salary: role.salary,
                title: role.title
            };
        };
    };
}
exports.hirePerson = hirePerson;
;
// function hirePersonInOneSet
function setEmployeeSalary(employee) {
    return function (salary) {
        employee.salary = salary;
        return employee;
    };
}
exports.setEmployeeSalary = setEmployeeSalary;
function printEmployeeInfo(employee) {
    console.log(employee);
}
exports.printEmployeeInfo = printEmployeeInfo;
;
