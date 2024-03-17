import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import prisma from "./prisma/init";

dotenv.config();

const app: Express = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("server is running");
});

app.get("/users", async (req: Request, res: Response) => {
  console.log("----all users---", prisma);
});

app.post("/create", async (req: Request, res: Response) => {
  const { name } = req.body;
  console.log(">>>>>", name);
  const newUser = await prisma.user.create({
    data: { name },
  });
  res.status(200).json({ newUser });
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
