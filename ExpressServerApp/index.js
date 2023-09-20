import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.sendStatus(200);
})

app.post("/register", (req, res) => {
    res.sendStatus(201);
})

app.put("/user/vini", (req, res) => {
    res.sendStatus(200);
})

app.patch("/user/vini", (req, res) => {
    res.sendStatus(200);
})

app.delete("/user/vini", (req, res) => {
    res.sendStatus(200);
})


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}.`);
})