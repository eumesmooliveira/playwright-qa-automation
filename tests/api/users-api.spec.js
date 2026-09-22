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

});