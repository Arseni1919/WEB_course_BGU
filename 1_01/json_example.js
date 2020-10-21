const person = {
    firstName: "Jon",
    lastName: "Doe"

};

undefined

person

// {firstName: "Jon", lastName: "Doe"}

const personJSON = JSON.stringify(person)

undefined

personJSON

// "{"firstName":"Jon","lastName":"Doe"}"

const person2 = JSON.parse(personJSON);

undefined

person2

// {firstName: "Jon", lastName: "Doe"}
