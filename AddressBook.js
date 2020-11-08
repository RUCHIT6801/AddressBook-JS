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

  //UC8 Search By City or State
  function searchByCity(addressBook, city) {
    return addressBook.filter((contact) => contact.city === city);
  }
  
  function searchByState(addressBook, state) {
    return addressBook.filter((contact) => contact.state === state);
  }
  
  console.log("UC8:Search by City or State")
  console.log(searchByCity(addressBook, "Bhopal"));
  console.log(searchByState(addressBook, "Maharashtra"));

  //UC9 View By City or State
  console.log("UC:9~~Count by City or State")
  function viewByCity(addressBook) {
    let contactsByCity = new Map();
    addressBook.filter((contact) =>
      contactsByCity.set(contact.city, searchByCity(addressBook, contact.city))
    );
    return contactsByCity;
  }
  function viewByState(addressBook) {
    let contactsByState = new Map();
    addressBook.filter((contact) =>
      contactsByState.set(
        contact.state,
        searchByState(addressBook, contact.state)
      )
    );
    return contactsByState;
  }
  
  console.log(viewByCity(addressBook));
  console.log(viewByState(addressBook));

//UC10 Count By City or State
console.log("UC10 :Count by City or State")
  let countByCity = new Map();
viewByCity(addressBook).forEach((value, key) =>
  countByCity.set(key, value.length)
);
console.log(countByCity);

let countByState = new Map();
viewByState(addressBook).forEach((value, key) =>
  countByState.set(key, value.length)
);
console.log(countByState);

//UC11-12 Sort by name ,city, state zip
function sortAddressBook(addressBook, field) {
  switch (field) {
    case "name":
      return addressBook.sort((a, b) =>
        (a.firstName + " " + a.lastName).localeCompare(
          b.firstName + " " + b.lastName
        )
      );
      break;
    case "city":
      return addressBook.sort((a, b) => a.city.localeCompare(b.city));
      break;
    case "state":
      return addressBook.sort((a, b) => a.state.localeCompare(b.state));
      break;
    case "zip":
      return addressBook.sort((a, b) => a.zip.localeCompare(b.zip));
      break;
    default:
      return null;
  }
}
console.log("UC11:Sorted By Name: ");
console.log(sortAddressBook(addressBook, "name"));
console.log("UC12:Sorted By City: ");
console.log(sortAddressBook(addressBook, "city"));
console.log("\nUC12:Sorted By State: ");
console.log(sortAddressBook(addressBook, "state"));
console.log("\nUC12:Sorted By Zip: ");
console.log(sortAddressBook(addressBook, "zip"));


