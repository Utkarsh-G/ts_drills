
import { describe, it, expect } from "@jest/globals"
import { hirePerson, setEmployeeSalary, printEmployeeInfo, Person, Employee, Role } from "../employeeProcessor";




describe("Test processor", () => {

    const Jerry: Person = {
        name: "Jeremy",
        age: 28
    };
    
    const Helen: Person = {
        name: "Helen",
        age: 43
    };

    const manager: Role = {
        salary: 1000,
        title: "Engineering Manager"
    }

    const intern: Role = {
        salary: 100,
        title: "Intern"
    }

    const setOfIds: Set<number> = new Set();
    const hirePersonForSetOfIds = hirePerson(setOfIds);

    it("Should hire a person correctly", () => {
        expect(hirePersonForSetOfIds(Jerry)(manager)).toEqual(expect.objectContaining({
            name: "Jeremy",
            age: 28,
            salary: 1000,
            title: "Engineering Manager"
        }));
    });

    it("Should set salary correctly", () => {
        expect(setEmployeeSalary(hirePersonForSetOfIds(Jerry)(manager))(2000)).toEqual(expect.objectContaining({
            name: "Jeremy",
            age: 28,
            salary: 2000,
            title: "Engineering Manager"
        }));
    });

});
