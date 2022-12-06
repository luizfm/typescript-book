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
  private name: string;

  constructor(name: string) {
    this.name = name;
    console.log(this.name + " on constructor");
  }

  // 6.2 example
  static myStaticMethod() {
    console.log("This is my static method");
  }

  // 6.3 example
  goodMorning() {
    console.log("Good morning");
  }
}

const firstPerson = new People("Luiz F");

// 6.2 Abstract method is a method that can be invoked without an Object defined

People.myStaticMethod();

// 6.3 Property Method - Related to an ability from the object
// It requires the object to be already declared.

firstPerson.goodMorning();
