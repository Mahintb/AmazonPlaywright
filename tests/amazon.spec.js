const { test,expect } = require("@playwright/test");


const LoginPage=require("./Pages/Login");
const { PRODUCT } = require("./Pages/datasource");
test.use({viewport:{width:1536,height:864}})


test("amzone page", async function({page}){

    await page.goto("https://www.amazon.in")
     const Signing= new LoginPage(page)
    await Signing.SigningToApplication()
    await page.waitForTimeout(20000)
    //await page.locator("#twotabsearchtextbox").click()
    await page.locator("#twotabsearchtextbox").type("oneplus nord")
    await page.locator(`//div[@aria-label='${PRODUCT}']`).click()
    
    let mobilename =await page.getByRole('heading', { name: 'Oneplus Nord CE 3 5G (Grey Shimmer, 8GB RAM, 128GB Storage)', exact: true }).getByRole('link').textContent()
    mobilename = mobilename.toLowerCase()
    console.log(mobilename)
    expect(mobilename.includes(product)).toBeTruthy()
    const addtocart = page.locator("#a-autoid-2-announce")
    await addtocart.scrollIntoViewIfNeeded()
    await addtocart.click()
    await page.waitForTimeout(6000)
    await page.locator("//span[@class='nav-cart-icon nav-sprite']").click()
    
    await page.getByLabel('Proceed to Buy Buy Amazon').click()
    await page.locator("//input[@aria-labelledby='orderSummaryPrimaryActionBtn-announce']").click()
})
