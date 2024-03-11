import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { InMemoryEventBus } from "@/shared/infrastructure/eventBus/InMemoryEventBus";
import { CreateUserUseCase } from "./users/application/createUser/CreateUser.useCase";
import { CreateDocumnentOnUserCreated } from "./documents/application/createDocument/CreateDocumentOnUserCreated";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  const eventBus = new InMemoryEventBus([new CreateDocumnentOnUserCreated()]);

  const createUserUseCase = new CreateUserUseCase(eventBus);
  createUserUseCase.execute({
    id: "1",
    name: "Eduardo cortes",
    email: "eduardo@mail.com",
  });

  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
