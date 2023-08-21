const express = require("express");
const app = express();
const port = 8000;
    
const { faker } = require('@faker-js/faker');


const createUser = () => {
    const newFakeUser = {
        _id: faker.string.uuid(),
        firstName: faker.person.firstName(), 
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
    return newFakeUser;
};

const createCompany = () => {
    const newFakeCompany = {
        _id: faker.string.uuid(),
        Name: faker.company.name(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country(),
        }
    };
    return newFakeCompany;
};

app.get("/api/new/users",(req,res)=>{ 
    res.send(createUser())
})



app.get("/api/new/company",(req,res)=>{ 
    res.send(createCompany())
})

app.get("/api/user/company",(req,res)=>{ 
    res.send({company : createCompany() , user : createUser()})
})

app.listen(port, () => {});