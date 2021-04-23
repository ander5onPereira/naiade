import { app } from "../app";
import request from "supertest"

import createConnection from '../database';
import { response } from "express";

var token: any;
describe("Usuario", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  test("Teste servidor está no ar", (done) => {
    request(app).get("/status").end((err, response) => {
      expect(response.status).toBe(200);
      done();
    });
  });

  test("Teste cadastro de um usuario completo com endereço", (done) => {
    request(app).post("/usuario").send({
      email: "Jake90@hotmail.com",
      etnia: "Branco",
      idade: 16,
      nome: "Jake",
      peso: 67.2,
      telefone: "2285986601",
      endereco: "",
      numero: 900,
      complemento: "546 Funk Lights",
      cep: "281624391",
      cidade: "Westport",
      estado: "Oklahoma",
    }).end((err, response) => {
      expect(response.status).toBe(201);
      done();
    });
  });
  test("Inserir email duplicado", (done) => {
    request(app).post("/usuario").send({
      email: "Jake90@hotmail.com",
      etnia: "Branco",
      idade: 16,
      nome: "Jake",
      peso: 67.2,
      telefone: "2285986601",
      endereco: "",
      numero: 900,
      complemento: "546 Funk Lights",
      cep: "281624391",
      cidade: "Westport",
      estado: "Oklahoma",
    }).end((err, response) => {
      expect(response.status).toBe(404);
      done();
    });
  });
  test("Email invalido", (done) => {
    request(app).post("/usuario").send({
      email: "Jake90ccass",
      etnia: "Branco",
      idade: 16,
      nome: "Jake",
      peso: 67.2,
      telefone: "2285986601",
      endereco: "",
      numero: 900,
      complemento: "546 Funk Lights",
      cep: "281624391",
      cidade: "Westport",
      estado: "Oklahoma",
    }).end((err, response) => {
      expect(response.status).toBe(404);
      done();
    });
  });
  test("Etinia invalida", (done) => {
    request(app).post("/usuario").send({
      email: "Jake90ccass",
      etnia: "Brano",
      idade: 16,
      nome: "Jake",
      peso: 67.2,
      telefone: "2285986601",
      endereco: "",
      numero: 900,
      complemento: "546 Funk Lights",
      cep: "281624391",
      cidade: "Westport",
      estado: "Oklahoma",
    }).end((err, response) => {
      expect(response.status).toBe(404);
      done();
    });
  });
  test("Realizar login invalido", (done) => {
    request(app).post("/login").send({
      email: "Jake9@hotmail.com",
    }).end((err, response) => {
      expect(response.status).toBe(401);
      done();
    });
  });
  test("Realizar login", (done) => {
    request(app).post("/login").send({
      email: "Jake90@hotmail.com",
    }).end((err, response) => {
      expect(response.status).toBe(200);
      token = response.body.token;
      done();
    });
  });

})
describe('GET /', () => {
  test('It should require authorization', async () => {
    return request(app)
      .get('/usuario')
      .then((response) => {
        expect(response.status).toBe(401);
      });
  });
  test('It responds with JSON', async () => {
    return request(app)
      .get('/usuario')
      .set('Authorization', `Bearer ${token}`)
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
      });
  });
});



