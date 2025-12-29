import { test, expect } from "@playwright/test";

test.describe.serial("API CRUD flow", () => {
  let prodID: string;

  const baseUrl = "https://api.restful-api.dev/objects";

  test("postApi", async ({ request }) => {
    const payLoad = {
      name: "Apple MacBook Pro 16",
      data: {
        year: 2019,
        price: 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB",
      },
    };

    const res = await request.post(baseUrl, { data: payLoad });
    const resBody = await res.json();

    expect(resBody.name).toBe(payLoad.name);
    prodID = resBody.id;

    expect(prodID).toBeTruthy();
  });

  test("putApi", async ({ request }) => {
    const res = await request.put(`${baseUrl}/${prodID}`, {
      data: {
        name: "Apple MacBook Pro 16",
        data: { year: 2022 },
      },
    });

    expect(res.status()).toBe(200);
  });

  test("patchApi", async ({ request }) => {
    const res = await request.patch(`${baseUrl}/${prodID}`, {
      data: { name: "Apple MacBook Pro 16 (new name)" },
    });

    expect(res.status()).toBe(200);
  });

  test("deleteApi", async ({ request }) => {
    const res = await request.delete(`${baseUrl}/${prodID}`);
    const body = await res.json();

    expect(body.message).toContain("Object with");
  });
});
