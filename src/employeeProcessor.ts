// hire someone
// give them a salary and title and id
// allow raises and promotions
// fire them

export type Person = {
    name: string;
    age: number;
};

export type Role = {
    salary: number;
    title: string;
}

export type Employee = Person & Role & { 
    id: number;
};

// type set = Partial<Employee>

function generateRandomInteger(): number {
    return Math.ceil(Math.random()*100);
};

function isNumberInSet(setOfNumbers: Set<number>): (number: number) => boolean {
    return function(number: number){
        return setOfNumbers.has(number);
    };
};

function generateUniqueRandomNotInSet(setOfNumbers: Set<number>): number {
    let candidateNumber = generateRandomInteger();
    if (setOfNumbers.size > 50) return -1; // bad error handling, need some monading?
    if (isNumberInSet(setOfNumbers)(candidateNumber)) candidateNumber = generateRandomInteger(); // check if "IFs" are okay
    setOfNumbers.add(candidateNumber);
    return candidateNumber;
};

export function hirePerson(setOfNumbers: Set<number>): (person: Person) => (role: Role) => Employee {
    
    return function(person: Person) {
        return function(role: Role){

            return {
                id: generateUniqueRandomNotInSet(setOfNumbers), // we will revisit this
                name: person.name,
                age: person.age,
                salary: role.salary,
                title: role.title
            };
        };
    };
};

// function hirePersonInOneSet

export function setEmployeeSalary(employee: Employee): (salary: number) => Employee {
    return function(salary: number){
        employee.salary = salary;
        return employee;
    };
}

export function printEmployeeInfo(employee: Employee) {
    console.log(employee);
};