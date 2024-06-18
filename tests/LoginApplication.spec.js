const { test,expect } = require("@playwright/test");

test("amzone page", async function({page}){

    await page.goto("https://www.amazon.in")

})