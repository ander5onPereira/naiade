import { app } from "../app";
import request from "supertest"

import createConnection from '../database';

describe("Endereco", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });
  it("Liste enrereços", async () => {
    const response = await request(app).get("/endereco");
    expect(response.status).toBe(401);
  });
})