import express, { Request, Response } from "express";

const app = express();
const port = 1234;
app.get("/", (request: Request, response: Response) => {
  response.send("by NDK");
});

app.listen(port, () => console.log(`Running on port ${port}`));
