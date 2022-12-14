// 7 Interfaces

export {}; // Reset document workaround.

interface CustomDocumentType {
  name: string;
}

function document(type: CustomDocumentType) {
  console.log(type.name); // Name is accessible because it's part of DocumentType interface
}

const myDocument = { size: 11, name: "CPF" };
document(myDocument); // There is no error because the interface checks only the required props.

// 7.1 Optional properties

interface CustomDocumentType {
  name: string;
  size?: number; // Optional property
}

function documentV2(type: CustomDocumentType) {
  if (type.size === 11 && type.name === "CPF") {
    console.log("The character size and the type are from a CPF document");
  } else {
    console.log("Can't confirm that it could be a CPF document type");
  }
}

const myDocumentV2 = { size: 11, name: "CPF" };
const anotherDocumentV2 = { name: "Voter registration card" };

documentV2(myDocumentV2); // First if condition
documentV2(anotherDocumentV2); // Else condition cause type name and type size are different from what is requested

// 7.2 Function types

interface SearchInterface {
  (text: string, words: string): boolean;
}

let searchFunction: SearchInterface; // Using let because const must be initialized;

searchFunction = function (text: string, searchedWord: string) {
  const result = text.search(searchedWord); // The main difference between includes and search is that
  //search returns the position index of the first word that matches the value, and not a boolean like includes check.
  if (result === -1) {
    console.log("No search results containing the word " + searchedWord);
    return false;
  } else {
    console.log("Word found " + searchedWord);
    return true;
  }
};

searchFunction("um texto qualquer", "qualquerr");

// 7.3 Indexable types

interface ListInterface {
  [index: number]: string;
}

// Same as string[] is this case.
// The difference between using one or another is that the ListInterface can be reusable type, letting
// it being used for objects as well. On the other hand, it doesn't have the array native props like
// length, pop, push and so on. If you don't wanna possibility the use of those It should use an interface
// instead of a array type.

let myList: ListInterface;
myList = ["Luiz F", "De Morais"];

let myNameString: string = myList[0];
let mySurnameString: string = myList["1"];
console.log(myNameString, mySurnameString);

// 7.4 Interface

interface CarInterface {
  motor: string;
  carPlate?: string;
  luxuryCar(name: string): boolean;
}

class Car implements CarInterface {
  constructor(public motor: string, public carPlate: string) {}

  luxuryCar(name: string): boolean {
    return name === "BMW";
  }
}

// 7.5 Extending Interfaces

interface LivingBeing {
  name: string;
}

interface Dinosaur {
  pawnsAmount: number;
}

interface Mammal extends LivingBeing, Dinosaur {
  mammalTime: number;
}

const horse: Mammal = {
  name: "Horse",
  pawnsAmount: 4,
  mammalTime: 35000,
};

// 7.6 Interfaces to extend classes

class Client {
  private _id: number;

  constructor(id: number) {
    this._id = id;
  }

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }
}

interface ClientInterface extends Client {
  clientName: string;
}

// It's possible to extends only one class
// Normally when extending, you want to add more content
// Implementing, is a contract you must follow, so you're must add that thing on your class,
// while extending already give you that even if you don't add it on the extender class

class NewClient extends Client implements ClientInterface {
  clientName: string;

  constructor(id: number, clientName: string) {
    super(id);
    this.clientName = clientName;
  }
}

class AnotherClient extends Client {}

const client = new NewClient(1, "Luiz F");
client.clientName = "de Morais";
client.id = 12;
console.log(client);

const anotherClient = new AnotherClient(2);
anotherClient.id = 13;
console.log(anotherClient);
