const express = require("express");
const usersRouter = require("./routes/users");
const app = express();
const port = 3000;
const is_success = true;
const user = "john_doe_12345";
const roll_number = "JD1234";
const alpha = ["J", "D"];
app.get("/", (req, res) => {
  res.send("Hello World!");
  //res.send({ is_success, user, roll_number });
});

app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`is_success: ${is_success}`);
  console.log(`user: ${user}`);
  console.log(`roll_number: ${roll_number}`);
  console.log(`"alphabets": ${alpha}`);
});
