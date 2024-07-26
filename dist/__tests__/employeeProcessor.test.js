"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const employeeProcessor_1 = require("../employeeProcessor");
(0, globals_1.describe)("Test processor", () => {
    const Jerry = {
        name: "Jeremy",
        age: 28
    };
    const Helen = {
        name: "Helen",
        age: 43
    };
    const manager = {
        salary: 1000,
        title: "Engineering Manager"
    };
    const intern = {
        salary: 100,
        title: "Intern"
    };
    const setOfIds = new Set();
    const hirePersonForSetOfIds = (0, employeeProcessor_1.hirePerson)(setOfIds);
    (0, globals_1.it)("Should hire a person correctly", () => {
        (0, globals_1.expect)(hirePersonForSetOfIds(Jerry)(manager)).toEqual(globals_1.expect.objectContaining({
            name: "Jeremy",
            age: 28,
            salary: 1000,
            title: "Engineering Manager"
        }));
    });
    (0, globals_1.it)("Should set salary correctly", () => {
        (0, globals_1.expect)((0, employeeProcessor_1.setEmployeeSalary)(hirePersonForSetOfIds(Jerry)(manager))(2000)).toEqual(globals_1.expect.objectContaining({
            name: "Jeremy",
            age: 28,
            salary: 2000,
            title: "Engineering Manager"
        }));
    });
});
