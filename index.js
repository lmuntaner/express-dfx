const express = require('express');
const app = express();
const port = 8080;
var exec = require('child_process').exec;

app.get('/', (req, res) => {
  exec("dfx canister --network http://localhost:8080 call qsgjb-riaaa-aaaaa-aaaga-cai get_stats", (err, stdout) => {
    console.log(stdout);
    res.send("hello world");
  })
})

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening on port ${port}`)
})