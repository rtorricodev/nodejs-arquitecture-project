import ComisionEmployeeSalary from './SalaryCalculator/ComisionEmployee.js';
import ParcialTimeSalary from './SalaryCalculator/ParcialTimeEmployee.js';

export  default class Employee {
    constructor(name, type, fixedSalary, timesheet, salesheet ){
        this.name = name;
        this.type = type;
        this.timesheet = timesheet;
        this.salesheet = salesheet;
        this.fixedSalary = fixedSalary;
    }

    setType(type){
        this.type = type;
    }

    setTimesheet(timesheet){
        this.timesheet = timesheet;
    }

    setSalesheet(salesheet){
        this.salesheet = salesheet;
    }

    setFixedSalary(fixedSalary){
        this.fixedSalary = fixedSalary;
    }

    calculateSalary(){
        this.ComisionSalary = ComisionEmployeeSalary.calculate(this);
        this.PartialTimeSalary = ParcialTimeSalary.calculate(this);
    }
}