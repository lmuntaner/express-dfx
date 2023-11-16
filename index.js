const express = require('express');
const app = express();
const port = 3000;
var exec = require('child_process').exec;

app.get('/', (req, res) => {
  exec("dfx canister --network http://localhost:8080 call qsgjb-riaaa-aaaaa-aaaga-cai get_stats", (err, stdout) => {
    res.send(stdout)
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})