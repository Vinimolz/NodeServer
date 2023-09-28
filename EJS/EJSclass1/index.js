import express from "express"

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3000;
var day = 0;

function getWeekDay(req, res, next){
    
    const now = new Date();
    day = now.getDay();

    next();
}

app.use("/", getWeekDay);

app.get("/", (req, res) => {

    if (day > 0 && day < 6){
        res.render(__dirname + "/views/index.ejs", {weekDay: "weekday", timeTo: "time to work hard"});
    } else{
        res.render(__dirname + "/views/index.ejs", {weekDay: "weekend day", timeTo: "time rest"});
    }
});

app.listen(PORT, () => {
    console.log(`Server running on: localhost:${PORT}`);
});