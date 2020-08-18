import { MemoryUsersRepository } from "../../repositories/implementations/MemoryUsersRepository";
import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const memoryUsersRepository = new MemoryUsersRepository();
const mailTrapMailProvider = new MailTrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
  memoryUsersRepository,
  mailTrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
