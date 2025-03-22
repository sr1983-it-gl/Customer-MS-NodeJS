
import {Customer} from "./customer.js"

const getAllCustomers = (req, res) => {

    Customer.find()
        .then((customers) => res.json(customers))
        .catch((err) => res.status(404).json({ msg: "No Customers found" }));
}

const postCustomer = (req, res) => {

    const reqBody = req.body;
    console.log(`Request body without JSON.stringify is ${reqBody}`);
    console.log(`Request body with JSON.stringify  ${JSON.stringify(reqBody)}`);

    const customerName = req.body.name;
    const customerAge = req.body.age;
    const customerAddress = req.body.address;

    const newCustomerObj = {

        name: customerName,
        age: customerAge,
        address: customerAddress
    }

    Customer.create(newCustomerObj)
        .then((createdCustomer) => {

            res.status(201).send(createdCustomer)
        })
        .catch((error) => {
            console.log("Error creating Customer", error)
        })

}

const getCustomer = (req, res) => {

    console.log("Params -> " + JSON.stringify(req.params));
    const customerID = req.params.id;

    console.log(`Customer ID is ${customerID}`);

    Customer.findById(customerID)
        .then((customerObj) => {
            res.send(customerObj);
        })
        .catch((error) => {
            console.log("Error getting Customer", error)

            const errorResponse = {
                message: `Customer by id ${customerID} not found`,
                technicalMessage: 'Check the request parameter value sent as part of the URL'
            }
            res.status(404).send(errorResponse);
        })
}


export {getAllCustomers, postCustomer, getCustomer}