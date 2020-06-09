const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client"));

// app.use("/", (req, res) => {
//     res.sendFile(__dirname + "/client/index.html");
// });

const clientRoutes = require("./routes/client-routes");
const apiRoutes = require("./routes/api-routes");

app.use(clientRoutes);
app.use(apiRoutes);

// app.use("/api", (req, res) => {
//     res.json({
//         name: "Hello Everyone"
//     })
// });
app.listen(PORT, () => {
    console.log(`Listening at: http://localhost:${PORT}`);
});