const express = require("express");
const app = express();

app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello world!" });
});
app.post("/:operation", (req, res) => {
  const { num1, num2 } = req.body;
  const operation = req.params.operation;
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    isNaN(num1) ||
    isNaN(num2)
  ) {
    res.status(400).json({ status: "error", message: "Invalid data types" });
    return;
  }
  switch (operation) {
    case "add":
      const sum = num1 + num2;
      if (sum > 1000000) {
        res.json({ status: "error", message: "Overflow" });
      } else if (sum < -1000000) {
        res.json({ status: "error", message: "Underflow" });
      } else {
        res.json({
          status: "success",
          message: "The sum of given two numbers",
          sum,
        });
      }
      break;
    case "sub":
      const difference = num1 - num2;
      if (difference > 1000000) {
        res.json({ status: "error", message: "Overflow" });
      } else if (difference < -1000000) {
        res.json({ status: "error", message: "Underflow" });
      } else {
        res.json({
          status: "success",
          message: "The difference of given two numbers",
          difference,
        });
      }
      break;
    case "multiply":
      const result = num1 * num2;
      if (result > 1000000) {
        res.json({ status: "error", message: "Overflow" });
      } else if (result < -1000000) {
        res.json({ status: "error", message: "Underflow" });
      } else {
        res.json({
          status: "success",
          message: "The product of given numbers",
          result,
        });
      }
      break;
    case "divide":
      if (num2 === 0) {
        res.json({ status: "error", message: "Cannot divide by zero" });
      } else {
        const result = num1 / num2;
        if (result > 1000000) {
          res.json({ status: "error", message: "Overflow" });
        } else if (result < -1000000) {
          res.json({ status: "error", message: "Underflow" });
        } else {
          res.json({
            status: "success",
            message: "The division of given numbers",
            result
          });
        }
      }
      break;
    default:
      res.status(400).json({ status: "error", message: "Invalid operation" });
  }
});
app.listen(port, () => console.log(`App listening on port ${port}!`));
// const express = require('express')
// const app = express()
// const bodyParser = require("body-parser");
// const port = 3000
// app.use(express.urlencoded());

// // Parse JSON bodies (as sent by API clients)
// app.use(express.json());


// app.use(bodyParser.urlencoded({ extended: false }))

// app.use(bodyParser.json())
// // your code goes here
// app.get("/",(req,res)=>{
//     res.end("hello world");
// })
// app.post("/add",(req,res)=>{
//     // let num1=req.body.num1;
//     // let num2 =req.body.num2;
//     res.json({
//         status : "success",
//         mesaage : "sum of the given two numbers",
//         sum: Number(req.body.num1) +Number(req.body.num2)
//     })
// });
// app.post("/sub",(req,res)=>{
  
//         res.json({
//             status : "success",
//             mesaage : "sub of the given two numbers",
//             // sub: Number(num1) - Number(num2)
//             sub: Number(req.body.num1)- Number(req.body.num2)
//         })
// });
// app.post("/multiply",(req,res)=>{
 
//     res.json({
//         status : "success",
//         mesaage : "product of the given two numbers",
//         product: (Number(req.body.num1)) * (Number(req.body.num2))
//     })
// });
// app.post("/divide",(req,res)=>{
    
//     if(req.body.num2 ===0){
//         res.send("cannot divide by zero")
//     }
//     else{
//         res.json({
//             status : "success",
//             mesaage : "division of the given two numbers",
//             division: (Number(req.body.num1)) / (Number(req.body.num2))
//         })
//     }
// });


// app.listen(port, () => console.log(`App listening on port ${port}!`))

// // module.exports = app;