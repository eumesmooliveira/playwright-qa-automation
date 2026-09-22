// @ts-check

import { test, expect } from '@playwright/test';

test.describe('API - Users', () => {

    test('CT07 - Deve consultar a lista de usuários', async ({ request }) => {

        const response = await request.get(
            'https://jsonplaceholder.typicode.com/users'
        );

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(Array.isArray(body)).toBeTruthy();
        expect(body).toHaveLength(10);

        expect(body[0]).toMatchObject({
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz'
        });
    });

    test('CT08 - Deve consultar um usuário específico', async ({ request }) => {

        const response = await request.get(
            'https://jsonplaceholder.typicode.com/users/1'
        );

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body).toMatchObject({
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz'
        });

        expect(body.address).toBeDefined();
        expect(body.company).toBeDefined();
    });

    test('CT09 - Deve retornar 404 ao consultar usuário inexistente', async ({ request }) => {

        const response = await request.get(
            'https://jsonplaceholder.typicode.com/users/9999'
        );

        expect(response.status()).toBe(404);
        expect(response.ok()).toBeFalsy();

        const body = await response.json();

        expect(body).toEqual({});
    });

    test('CT10 - Deve criar um novo usuário', async ({ request }) => {

        const newUser = {
            name: 'Felipe Oliveira',
            username: 'felipeoliveira',
            email: 'felipe@example.com'
        };

        const response = await request.post(
            'https://jsonplaceholder.typicode.com/users',
            {
                data: newUser
            }
        );

        expect(response.status()).toBe(201);
        expect(response.ok()).toBeTruthy();

        const body = await response.json();

        expect(body).toMatchObject(newUser);
        expect(body.id).toBeDefined();
    });

    test('CT11 - Deve atualizar um usuário existente', async ({ request }) => {

        const updatedUser = {
            id: 1,
            name: 'Felipe Oliveira',
            username: 'felipeoliveira',
            email: 'felipe@example.com'
        };

        const response = await request.put(
            'https://jsonplaceholder.typicode.com/users/1',
            {
                data: updatedUser
            }
        );

        expect(response.status()).toBe(200);
        expect(response.ok()).toBeTruthy();

        const body = await response.json();

        expect(body).toMatchObject(updatedUser);
    });

    test('CT12 - Deve excluir um usuário existente', async ({ request }) => {

        const response = await request.delete(
            'https://jsonplaceholder.typicode.com/users/1'
        );

        expect(response.status()).toBe(200);
        expect(response.ok()).toBeTruthy();

        const body = await response.json();

        expect(body).toEqual({});
    });
});