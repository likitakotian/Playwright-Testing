import { test, expect } from '@playwright/test';

test.describe.serial("api testing", async () => {
    var userId;
    test("Get User", async ({ request }) => {
        const response = await request.get('https://reqres.in/api/users?page=2')
        console.log(await response.json()); //return resposne as json
        expect(await response.status()).toBe(200)
    })

    test("Create User", async ({ request }) => {
        const response = await request.post('https://reqres.in/api/users',
            {
                data: { "name": "morpheus123", "job": "leader" },
                headers: { "accept": "application/json" }
            });
        console.log(await response.json()); //return resposne as json
        expect(await response.status()).toBe(201)
        let res = await response.json();
        userId = res.id;
    })

    test("Update User", async ({ request }) => {
        const response = await request.put('https://reqres.in/api/users/' + userId,
            {
                data: { "name": "morpheus1236", "job": "leader1" },
                headers: { "accept": "application/json" }
            });
        console.log(await response.json()); //return resposne as json
        expect(await response.status()).toBe(200)
        let res = await response.json();
        userId = res.id;
    })

    test("Delete User", async ({ request }) => {
        const response = await request.delete('https://reqres.in/api/users/' + userId)
        expect(await response.status()).toBe(204)
    })
})