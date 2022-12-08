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
