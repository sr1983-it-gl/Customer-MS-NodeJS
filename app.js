
import express from "express";
import {connectToDB} from "./db.js"
import {populateSampleCustomers} from "./sample_customers_manager.js"
import {getAllCustomers, getCustomer, postCustomer} from "./customer_controller.js"


const app = express();
app.use(express.json());

app.get("/customers", getAllCustomers)
app.post("/customers", postCustomer)
app.get("/customers/:id", getCustomer)


const PORT = process.env.PORT || 80;
const server = app.listen(PORT, () => {

  const initHandler = async () => {

    connectToDB();
  }

  initHandler()
      .then((response) => {
        console.log(`Server started and running at port ${PORT}`);
      })
      .catch((error) => {
        console.log(error)
      })

})