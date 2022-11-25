import express from "express";
const router = express.Router();
const app = express();

app.get("/test", async (req,res) =>{
    res.send("Hello");
})

const PORT = 3050;

app.listen(3050, () => console.log(`Server running at ${PORT}`));
