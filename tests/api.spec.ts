import { test, expect } from "@playwright/test";

const baseUrl = "https://api.restful-api.dev/objects";
test("getApi", async ({ request }) => {
  const startTime = Date.now();

  const res = await request.get(baseUrl);
  let resBody = await res.json();
  let resHeader = await res.headers();
  //console.log(resBody);
  //console.log(resHeader);

  //some assertions
  expect(res.status()).toBe(200);
  expect(resBody[0].id).toBe("1");
  expect(resHeader["content-type"]).toContain("application/json");

  let resSize = (await res.body()).byteLength;
  expect(resSize).toBeLessThan(4000);

  let resTime = Date.now() - startTime;
  console.log(resTime);
  expect(resTime).toBeLessThan(2000);
});

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
  console.log(resBody);

  //expect(resBody.status()).toEqual(200);
  expect(resBody.name).toEqual(payLoad.name); //match the returned item with the payload
  let productID = resBody.id;
});

test("putApi", async ({ request }) => {
  const payLoad = {
    name: "Apple MacBook Pro 16",
    data: {
      year: 2022,
      price: 1650.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB",
    },
  };

  const res = await request.put(
    baseUrl + "/" + "ff8081819782e69e019b5d7361ea01fa",
    { data: payLoad }
  );
  const resBody = await res.json();
  console.log(resBody);
});
//the Patch is a partial update, no need to send the whole payload, only the updated field
test("patchApi", async ({ request }) => {
  const payLoad = {
    name: "Apple MacBook Pro 16 (new name)",
  };

  const res = await request.patch(
    baseUrl + "/" + "ff8081819782e69e019b5d7361ea01fa",
    { data: payLoad }
  );
  const resBody = await res.json();
  console.log(resBody);
});

test("deleteApi", async ({ request }) => {
  const res = await request.delete(
    baseUrl + "/" + "ff8081819782e69e019b5d7b81190202"
  );
  const resBody = await res.json();
  expect(resBody.message).toContain('Object with')
  console.log(resBody);
});
