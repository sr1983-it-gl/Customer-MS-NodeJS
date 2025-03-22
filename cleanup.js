


import {connectToDB} from "./db.js"
import {removeSampleCustomers} from "./sample_customers_manager.js"

await connectToDB();
await removeSampleCustomers()

process.exit()