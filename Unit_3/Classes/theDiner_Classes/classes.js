/* 
  Employees
    - manager
      - create tables
    - host
      - set tables
    - server
      - serve tables

    Employee Number

  -Table
*/


const employeeNumbers = [];

class Employee {

  static setEmployee(role,name,payRate) {
    // Create a random employee number
    const setEmployeeNumber = Math.floor(Math.random()*(100-1) +1);

    if(employeeNumbers.includes(setEmployeeNumber))
    {
      let tempNumber = setEmployeeNumber + "a";
      employeeNumbers.push(tempNumber);
    } else{
        employeeNumbers.push(setEmployeeNumber);
        numberToUse = setEmployeeNumber;
    }

    // Set Hire Date
    let today = new Date();

    
    // Set Role
    const usedClass = role;
    
    return new Manager(name,numberToUse,today,payRate);
  }

  constructor(name, empNumber, date, payRate) {
    this.name = name;
    this.employee_number = empNumber;
    this.dateHired = date;
    this.payRate = number(payRate.toFixed(2));
  }
}

class Manager extends Employee{

  constructor(name, employee_number, dateHired, payRate) {

    super(name,employee_number,dateHired,payRate);
    this.role = 'Manager';
  }
}

// const employee = new Employee('joe',1,new Date(),18);
// const manager = new Manager('jane',11,new Date(),18);
// console.log(employee,manager);

const manager = Employee.setEmployee(Manager,'Jane',18);
console.log(manager);

// Tables have
class Table {
  constructor(tableNumber,seatNumber) {
    this.tableNumber = tableNumber;
    this.seatNumber = seatNumber;
    this.seated = false;
    this.status = 'empty';
  }

  updateSeating() {
    if(this.seated) {
      this.seated = false;
    }else {
      this.seated = true;
      this.status = "waiting..."
    }
  }
}

const table = new Table(1,4);
table.updateSeating();
console.log(table);