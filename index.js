const express = require("express");
const app = express();
app.use(express.json());

//Import middleware
const authRoute = require("./routes/auth");
//Route middleware
app.use("/api/createsend/", authRoute);

app.get("/", (req, res) => res.send("Hello World!!!!"));

app.listen(8081, () => console.log("Server up and running on port 8081"));
