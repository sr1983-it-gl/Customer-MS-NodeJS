import {Customer} from "./customer.js";

const sampleCustomers = [
    {  name: 'John', age : 35, address : "Bangalore"},
    {  name: 'Priya', age : 30, address: "Delhi" },
    {  name: 'Sweta', age: 28, address: "Chennai" }
]


const populateSampleCustomers = async () => {

    await createSampleCustomers()
}


async function removeSampleCustomers(){

    await Customer.find({})
        .then( (customers) => {

            if (customers.length === 0) {
                console.log("No Customers found for cleanup")
            }

            customers.forEach( async (customer) => {

                console.log(`removeSampleCustomers: Fetched Customer is ${customer}`)

                const res = await Customer.deleteOne({_id: customer._id})
                    .then( (response) => {
                        console.log(`removeSampleCustomers: Customer with id ${customer._id} deleted successfully...`)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            })
        })
        .catch((error) => {
            console.log("Error loading the Sample Customers")
            console.log(error);
        })

}

async function createSampleCustomers() {

    sampleCustomers.forEach( (sampleCustomer) => {

        Customer.create(sampleCustomer)
            .then( (result) => {
                console.log("createSampleCustomers: Sample-Customer created successfully")
                console.log(result)
            })
            .catch( (err) => {
                console.log("Error creating Sample-Customer")
                console.log(err);
            })

    })

}

export {populateSampleCustomers, removeSampleCustomers, createSampleCustomers}