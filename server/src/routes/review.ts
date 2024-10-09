import express, { Request, Response } from "express";

let router = express.Router();

router.get("/", (request: Request, response: Response) => {
  response.send("by NDK");
});
router.get("/:productId", (request: Request, response: Response) => {
  response.send("by NDK");
});
router.post("/", (request: Request, response: Response) => {
  response.send("by NDK");
});
router.post("/:productId", (request: Request, response: Response) => {
  response.send("by NDK");
});
router.patch("/:productId", (request: Request, response: Response) => {
  response.send("by NDK");
});
router.delete("/", (request: Request, response: Response) => {
  response.send("by NDK");
});
router.delete("/:productId", (request: Request, response: Response) => {
  response.send("by NDK");
});

export default router;
