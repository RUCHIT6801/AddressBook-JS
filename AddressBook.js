class Contact {
  constructor(...params) {
    this.firstName = params[0];
    this.lastName = params[1];
    this.address = params[2];
    this.city = params[3];
    this.state = params[4];
    this.zip = params[5];
    this.phoneNo = params[6];
    this.email = params[7];
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(firstName) {
    this._firstName = firstName;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(lastName) {
    this._lastName = lastName;
  }

  get address() {
    return this._address;
  }
  set address(address) {
    this._address = address;
  }

  get city() {
    return this._city;
  }
  set city(city) {
    this._city = city;
  }

  get state() {
    return this._state;
  }
  set state(state) {
    this._state = state;
  }

  get zip() {
    return this._zip;
  }
  set zip(zip) {
    this._zip = zip;
  }

  get phoneNo() {
    return this._phoneNo;
  }
  set phoneNo(phoneNo) {
    this._phoneNo = phoneNo;
  }

  get email() {
    return this._email;
  }
  set email(email) {
    this._email = email;
  }
}

let addressBook = [
  new Contact(
    "Arjun",
    "Gupta",
    "Ayodhya Bypass",
    "Bhopal",
    "Madhya Pradesh",
    "462041",
    "8824347236",
    "arjun17697@gmail.com"
  ),
];


//UC3 Add Multiple Contacts
addressBook.push(
    new Contact(
      "Aditi",
      "Sharma",
      "56/A Mannat Complex",
      "Pune",
      "Maharashtra",
      "412000",
      "8282828282",
      "aditi@gmail.com"
    )
  );
  console.log("UC3:Add Contact");
  console.log(addressBook);
  
  //UC4 Edit Contact
addressBook.find((contact) => contact.firstName == "Aditi").firstName =
  "Rani";
console.log("UC4:Edit Contact")  
console.log(addressBook);


//UC5 Delete Contact
addressBook = addressBook.filter((contact) => contact.firstName !== "Arjun");
console.log("UC5:Delete Contact");
console.log(addressBook);

//UC6 Count Contact
function counter(count) {
    return ++count;
  }
  numbersOfContact = addressBook.reduce(counter, 0);
  console.log("UC6:Contact Count");
  console.log("Number of contacts: " + numbersOfContact);

  //UC7 Delete Duplicate Contacts on the basis of First Name

  //Add Duplicate Contact
  addressBook.push(
    new Contact(
      "Rani",
      "Sharma",
      "56/A Mannat Complex",
      "Pune",
      "Maharashtra",
      "412000",
      "8282828282",
      "aditi@gmail.com"
    )
  );

 
  console.log("UC7:Don't allow duplicate contact while adding")

  function addNewContact(addressBook, newContact) {
    if (
      addressBook.find(
        (contact) =>
          contact.firstName === newContact.firstName &&
          contact.lastName === newContact.lastName
      ) === undefined
    )
      addressBook.push(newContact);
    else throw "Contact with same name already exists";
  }

  //Check for duplicate contact
  let newContact = new Contact(
    "Rani",
    "Sharma",
    "Kolapur",
    "Mumbai",
    "Maharashtra",
    "401401",
    "9595959595",
    "adi@gmail.com"
  );
  try {
    addNewContact(addressBook, newContact);
  } catch (e) {
    console.error(e);
  }
  //Check for new contact
  let contact2=new Contact(
    "Arjun",
    "Gupta",
    "Ayodhya Bypass",
    "Bhopal",
    "Madhya Pradesh",
    "462041",
    "8824347236",
    "arjun17697@gmail.com"
  );
  try {
    addNewContact(addressBook, contact2);
  } catch (e) {
    console.error(e);
  }
  console.log(addressBook);


