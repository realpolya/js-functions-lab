import { config } from 'dotenv';
config();
import promptSync from 'prompt-sync';
import { Customer } from './models/customer.js';
import { connect as _connect, disconnect } from 'mongoose';

const prompt = promptSync();
let userID;

// FUNCTIONS
const createCustomer = async (username, howold) => {

    const customerData = {
        name: username,
        age: howold,
    };

    const customer = await Customer.create(customerData);
    console.log("New customer: ", customer);

}

const viewCustomers = async () => {
    
    const customers = await Customer.find({});
    console.log("All customers: ", customers);

    let id = customers[0]._id.toString()

}

const updateCustomer = async (username) => {
    
    const customers = await Customer.find({ name: username });
    console.log(customers);
    
    if (customers.length === 1) {
        
        let id = customers[0]._id.toString()
        let filter = { name: customers[0].name }

        let updatedName = prompt('What is your updated name? ')
        let updatedAge = prompt('What is your updated age? ')

        const customerData = {
            name: updatedName,
            age: updatedAge,
        };

        customers[0] = await Customer.findOneAndUpdate(filter, customerData)

    } else if (customers.length > 1) {
        
        console.log(`Below is a list of customers per your query
            
            `)
        customers.forEach((customer) => {
            console.log(`id: ${customer._id.toString()} -- Name: ${customer.name}, age: ${customer.age}`);
        })
        let idNeeded = prompt(`
        Copy and paste the id of the customer you would like to update here: `);

        const customerNeeded = await Customer.findById(idNeeded);
        console.log("Customer needed is ", customerNeeded);

    } else if (customers.length === 0) {
        
        console.log("Could not find results related to your query");
        return "error";

    }

    const updatedCustomers = await Customer.find({});
    console.log("Updated customers are ", updatedCustomers);

}

const connect = async (number, username, howold) => {
    
    // Connect to MongoDB using the MONGODB_URI specified in our .env file.
    await _connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Call the runQueries function, which will eventually hold functions to work
    // with data in our db.
    if (number == 1) {

        await createCustomer(username, howold);

    } else if (number == 2) {

        await viewCustomers();

    } else if (number == 3) {

        await updateCustomer(username);

    }

    // Disconnect our app from MongoDB after our queries run.
    await disconnect();
    console.log('Disconnected from MongoDB');

    // Close our app, bringing us back to the command line.
    process.exit();
};


// USER INTERFACE
console.log(`Welcome to the CRM!

What would you like to do?

  1. Create a customer
  2. View all customers
  3. Update a customer
  4. Delete a customer
  5. Quit`)

const choice = prompt('Number of action to run: ');

// create a customer
if (choice == 1) {

    const username = prompt('What is your name? ');
    const age = prompt('How old are you? ');

    console.log(`Your name is ${username}`)

    connect(choice, username, age);

} else if (choice == 2) {

    connect(choice);

} else if (choice == 3) {

    const username = prompt('What is your username? ');
    connect(choice, username);

}


