import { config } from 'dotenv';
config();
import promptSync from 'prompt-sync';
import { Customer } from './models/customer.js';
import { connect as _connect, disconnect } from 'mongoose';
import mongoose from 'mongoose';

// colors for terminal
const red = '\x1b[31m';
const reset = '\x1b[0m';
const green = '\x1b[32m';

const prompt = promptSync();

// ----------------------------------FUNCTIONS-----------------------------
// choice 1
const createCustomer = async (username, howold) => {

    const customerData = {
        name: username,
        age: howold,
    };

    const customer = await Customer.create(customerData);
    console.log(green + "New customer: " + customer + reset);

}

// choice 2
const viewCustomers = async () => {
    
    const customers = await Customer.find({});
    console.log(green + "All customers: " + reset);
    customers.forEach((customer) => {
        console.log(green + `id: ${customer._id.toString()} -- Name: ${customer.name}, age: ${customer.age}` + reset);
    })

}

// choice 3
const updateCustomer = async (username) => {
    
    const customers = await Customer.find({ name: username });
    
    // if one customer satisfies the search
    if (customers.length === 1) {

        console.log(`Below is a list of customers per your query
            
            `)
        
            console.log(`id: ${customers[0]._id.toString()} -- Name: ${customers[0].name}, age: ${customers[0].age}`);
        
        let filter = { name: customers[0].name }

        let updatedName = prompt('What is your updated name? ')
        let updatedAge = prompt('What is your updated age? ')

        const updatedData = {
            name: updatedName,
            age: updatedAge,
        };

        customers[0] = await Customer.findOneAndUpdate(filter, updatedData)

    } // if more than one customer satisfy the search
    else if (customers.length > 1) {
        
        console.log(`Below is a list of customers per your query
            
            `)
        
        customers.forEach((customer) => {
            console.log(`id: ${customer._id.toString()} -- Name: ${customer.name}, age: ${customer.age}`);
        })

        let idNeeded = prompt(`Copy and paste the id of the customer you would like to update here: `);

        const customerNeeded = await Customer.findById(idNeeded);
        console.log("Customer needed is ", customerNeeded);
        
        let updatedName = prompt('What is your updated name? ');
        let updatedAge = prompt('What is your updated age? ');

        const updatedData = {
            name: updatedName,
            age: updatedAge,
        };

        await Customer.findByIdAndUpdate(idNeeded, updatedData);

    } // if no customers satisfy the search 
    else if (customers.length === 0) {
        
        console.log("Could not find results related to your query");
        return "error";

    }

    // see the updated database
    const updatedCustomers = await Customer.find({});
    console.log(green + "Updated customers are:" + reset);

    updatedCustomers.forEach((customer) => {
        console.log(green + `id: ${customer._id.toString()} -- Name: ${customer.name}, age: ${customer.age}` + reset);
    })

}

// choice 4
const deleteCustomer = async (username) => {

    // find customer
    const customers = await Customer.find({ name: username });

    console.log(`Below is a list of customers per your query
            
        `)
    
    customers.forEach((customer) => {
        console.log(`id: ${customer._id.toString()} -- Name: ${customer.name}, age: ${customer.age}`);
    })

    // retrieve the needed id
    let idNeeded = prompt(`WARNING – copy and paste the id of the customer you would like to DELETE: `);
    
    // delete by id
    await Customer.findByIdAndDelete(idNeeded);

    // show the updated list
    const updatedCustomers = await Customer.find({});
    console.log(green + `After deletion, the updated customers are: 
        ` + reset);
    updatedCustomers.forEach((customer) => {
        console.log(green + `id: ${customer._id.toString()} -- Name: ${customer.name}, age: ${customer.age}` + reset);
    })

}


// ----------------------------MAIN CONNECT FUNCTION----------------------
const connect = async (number, username, howold) => {
    
    // Connect to MongoDB using the MONGODB_URI specified in our .env file.
    await _connect(process.env.MONGODB_URI);

    // Call the runQueries function, which will eventually hold functions to work
    // with data in our db.
    if (number == 1) {

        await createCustomer(username, howold);

    } else if (number == 2) {

        await viewCustomers();

    } else if (number == 3) {

        await updateCustomer(username);

    } else if (number == 4) {

        await deleteCustomer(username);

    }

    // Disconnect our app from MongoDB after our queries run.
    await disconnect();

};


// --------------------------------USER INTERFACE--------------------------
console.log('Welcome to the CRM!')

const userInteracts = async () => {
    
    console.log(red + `

        What would you like to do?
        
          1. Create a customer
          2. View all customers
          3. Update a customer
          4. Delete a customer
          5. Quit

    ` + reset)
        
    // obtain a choice
    const choice = prompt('Number of action to run: ');
    
    // create a customer
    if (choice == 1) {
    
        const username = prompt('What is your name? ');
        const age = prompt('How old are you? ');
    
        await connect(choice, username, age);
    
    } else if (choice == 2) {
    
        await connect(choice);
    
    } else if (choice == 3) {
    
        const username = prompt('What is your username? ');
        await connect(choice, username);
    
    } else if (choice == 4) {
    
        const username = prompt('What is the customer you want to DELETE? ');
        await connect(choice, username);
        
    } else if (choice == 5) {

        await mongoose.connection.close();
        console.log(green + `Thank you for your business!
Exiting now...` + reset)

        // Close our app, bringing us back to the command line.
        process.exit();

        return true;

    } else {

        console.log("Improper use");

        // Close our app, bringing us back to the command line.
        process.exit();

        return true;

    }

    // recursive function
    userInteracts(); 

}

userInteracts();




