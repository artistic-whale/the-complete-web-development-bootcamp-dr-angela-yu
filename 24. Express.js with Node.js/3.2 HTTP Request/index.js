import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log(req.rawHeaders);
    res.send("<h1>Hello world</h1><p>hi</p>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About us</h1><p>My name is...</p>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact</h1>");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});