
import {connectToDB} from "./db.js"
import {populateSampleCustomers} from "./sample_customers_manager.js"


const main = async () => {

  connectToDB();
  await populateSampleCustomers()

}

await main()
