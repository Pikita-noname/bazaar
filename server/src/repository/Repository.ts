import { PrismaClient } from "@prisma/client";
import { injectable } from "inversify";

@injectable()
export default class Repository {
  readonly orm: PrismaClient = new PrismaClient();
}
