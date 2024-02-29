import request from 'supertest';
import app from 'index.js';

it ('responds to /', async () => {
    const response = await request(app).get('/');
    expect(response.text).toMatch('Hello Class, Again!');
    });