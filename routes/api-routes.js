const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/api", (req, res) => {
    console.log("api has been hit");
    // res.send("Hello from this world");
    res.json({ mes: "hello" });
});
module.exports = router;