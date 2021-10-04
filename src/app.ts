class Department {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];
  static fiscalYear = 2020;

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    // THIS WILL NOT WORK: console.log(this.fiscalYear)
    console.log(Department.fiscalYear)
  }

  static createEmployee(name: string) {
    return {name: name}
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    } else {
      throw new Error("No report found");
    }
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please add a valid report");
    } else {
      this.addReport(value);
    }
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === "Max") {
      this.employees.push(name);
    }
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", ["Max"]);


it.addEmployee("Max");
it.addEmployee("Manu");

const employee1 = Department.createEmployee("MAX")
console.log(employee1)

// it.employees[2] = 'Anna';

it.describe();
it.name = "NEW NAME";
it.printEmployeeInformation();

console.log(it);
console.log(Department.fiscalYear)

const accounting = new AccountingDepartment("d2", []);
accounting.mostRecentReport = "Dupa";
accounting.addReport("Something went wrong...");
accounting.mostRecentReport;
accounting.printReports();

accounting.addEmployee("Max");
accounting.addEmployee("not Max");

console.log(accounting);

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
