import app from "../src/app.js";
import request from 'supertest';

describe('GET /tasks', ()=>{
    test('Deberia responder con 200 status code',async()=>{
        //relizamos una petición asincrona
        const response=await request(app).get("/tasks").send();
        expect(response.statusCode).toBe(200);
    })
});