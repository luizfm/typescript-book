class Author {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

// Different from the Book, Author.prototype.name doesn't return any value
let author = new Author("Luiz");
console.log(author.name);
console.log(Author.prototype.name);

// 6.1 Class and methods

class People {
  name: string;

  constructor(name: string) {
    this.name = name;
    console.log(this.name + " on constructor");
  }

  // 6.1.2 example
  static myStaticMethod() {
    console.log("This is my static method");
  }

  // 6.1.3 example
  goodMorning() {
    console.log("Good morning");
  }
}

const firstPerson = new People("Luiz F");

// 6.1.2 Abstract method is a method that can be invoked without an Object defined

People.myStaticMethod();

// 6.1.3 Property Method - Related to an ability from the object
// It requires the object to be already declared.

firstPerson.goodMorning();

// 6.2 Inheritance

class Professional extends People {
  constructor(name: string) {
    super(name);
    console.log(this.name + " is a Professional"); // Access to this.name since People has this property accessible
  }
}

const professional = new Professional("Luiz");

// 6.3 Override

class PeopleOverrideExample {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  overrideFunc(): number {
    return 10;
  }
}

class ProfessionalOverrideExample extends PeopleOverrideExample {
  constructor(name: string) {
    super(name);
  }

  overrideFunc(): number {
    return super.overrideFunc() + 10;
  } // If this override method gets commented, we're going to take advantage
  // from the override func existent on the parent class. Comment this func to test it.
}

const newProfessional = new ProfessionalOverrideExample("Luiz");
console.log(newProfessional.overrideFunc()); // 20 or 10, based on the current methods.

// 6.4 visibility changers

class PeopleV3 {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public goodMorning() {
    console.log("Good morning");
  }

  private overrideFunc(): number {
    return 10;
  }
}

const peopleV3 = new PeopleV3("Luiz");
peopleV3.goodMorning();
// console.log(peopleV3.overrideFunc()) // Method not accessible since the function is private.

// 6.4.3 Protect

class PeopleV4 {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }

  public goodMorning() {
    console.log("Good Morning!");
  }

  protected overrideFunc(): number {
    return 10;
  }
}

class ProfessionalV4 extends PeopleV4 {
  constructor(name: string) {
    super(name);
  }

  public overrideFunc(): number {
    return super.overrideFunc() + 10;
  }
}

const peopleV4 = new PeopleV4("Luiz");
const professionalV4 = new ProfessionalV4("Luiz");

// console.log(peopleV4.overrideFunc())
console.log(professionalV4.overrideFunc());

// 6.5 Accessors: Getters and setters

// First example, without get and set and with public accessible property

class Employee {
  fullName: string;
  constructor(fullName: string) {
    this.fullName = fullName;
  }
}

const employee = new Employee("Luiz");
employee.fullName = "Luiz F de Morais";
console.log(employee);

// Example with private properties and with getters

class EmployeeV2 {
  private fullName: string;
  constructor(fullName: string) {
    this.fullName = fullName;
  }

  getFullName(): string {
    return this.fullName;
  }
}

const employeeV2 = new EmployeeV2("Luiz");
// employeeV2.fullName= "Luizera" // Not possible since fullName is now private
console.log(employeeV2.getFullName());

// Example of set into a Class for a private property checking an existence of a variable

let password = "Super password";

class EmployeeV3 {
  private fullName: string;
  constructor(fullName: string) {
    this.fullName = fullName;
  }

  getFullName(): string {
    return this.fullName;
  }

  setName(newName: string) {
    if (password && password === "Super password") {
      this.fullName = newName;
    } else {
      console.log("Wrong password, please try again");
    }
  }
}

const employeeV3 = new EmployeeV3("Luiz");
console.log(employeeV3.getFullName()); // First example return the initial name given as constructor
employeeV3.setName("Luiz F de Morais"); // Setting a new name
// employeeV3.fullName = "Luizinho" // Not possible since fullName is private
console.log(employeeV3.getFullName()); // Getting the name updated

// 6.6 Static properties

class Grid {
  static origin = { x: 0, y: 0 };

  constructor(private scale: number) {} // Declaring property together with params from constructor: Sugar syntax

  public distanceFromOrigin(points: { x: number; y: number }): number {
    const xDist = points.x - Grid.origin.x;
    const yDist = points.y - Grid.origin.y;

    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
}

const gridOne = new Grid(1.0);
const gridTwo = new Grid(5.0);

console.log(gridOne.distanceFromOrigin({ x: 10, y: 10 }));
console.log(gridTwo.distanceFromOrigin({ x: 10, y: 10 }));

// 6.7 Abstract classes

// Difference between Abstract classes and interfaces:
// The easiest answer is that you can set a few required a few examples (0% to 100%). Can't have an instance
// while interfaces are full required (100%)

abstract class Department {
  constructor(public name: string) {}

  printName(): void {
    console.log(this.name);
  }

  abstract printSomething(): void; // We need this method, but it's not logically done here
}

class Accounting extends Department {
  constructor(public name: string) {
    super(name);
  }

  printSomething(): void {
    console.log(this.name);
  }
}

const department = new Accounting("Accounting");
department.printSomething();
department.printName(); // We can access the parent method
