import { test, expect } from '@playwright/test';
import { LoginPage } from './pageObjects/LoginPage';

test('login', async ({ page},testInfo) => {
 
  await page.goto(process.env.URL);
  await page.waitForTimeout(2000)
  const login = new LoginPage(page)
  await login.SignUp("lorenzolinbce@gmail.com", "123456")
  await page.screenshot({ path: "screenshot/login.png", fullPage: true })
  await page.waitForTimeout(2000)
  const result = await page.getByRole('heading', { name: 'Hello, PlayWright' })
  await page.waitForTimeout(2000)
  await expect(result).toBeVisible()
  //await page.screenshot({path : "screenshot/login.png",fullPage: true })
  await testInfo.attach('login ', {
   body: await page.screenshot(),
   contentType : 'image/png'

  })
  await page.pause()
});

test('login 2', async ({ page }) => {

  await page.goto('http://192.168.1.115:3000/');
  await page.waitForTimeout(2000)
  const login = new LoginPage(page)
  await login.SignUp("lorenzolinbce@gmail.com", "123456")
  await page.waitForTimeout(2000)
  await page.getByRole('link', { name: 'admin' }).click();
  await page.waitForTimeout(2000)
  await page.getByRole('listitem')
    .filter({ hasText: "User 2" })
    .getByRole('button', { name: 'add user 1' })
    .click();
  // await page.pause()
});


test('login dashboard', async ({ page }) => {

  await page.goto('http://192.168.1.115:3000/');
  await page.waitForTimeout(2000)
  const login = new LoginPage(page)
  await login.SignUp("lorenzolinbce@gmail.com", "123456")
  await page.waitForTimeout(2000)
  await page.getByRole('link', { name: 'dashboard' }).click();
  await page.waitForTimeout(2000)
  const devMenu = await page.locator('#divlinks > div.text-black').all()
  console.log("Ini")
  await page.waitForTimeout(2000)
  for (let div of devMenu) {
    //await page.waitForTimeout(2000)
    console.log(await div.innerText())
    if (await (await div.innerText()).match("cochez")) {
      await div.getByAltText('cochez').click()
      await page.waitForTimeout(2000)
      break
    }
  }
  console.log("END")
  // await page.pause()
});

test('login paises', async ({ page }) => {

  await page.goto('http://192.168.1.115:3000/');
  await page.waitForTimeout(2000)
  const login = new LoginPage(page)
  await login.SignUp("lorenzolinbce@gmail.com", "123456")
  await page.waitForTimeout(2000)
  await page.getByRole('link', { name: 'paises' }).click();
  await page.waitForTimeout(2000)
  const rows = await page.locator('#countries > tbody > tr').all()
  console.log("Ini")
  await page.waitForTimeout(2000)
  let countries: Country[] = []
  for (let row of rows) {
    let contryName = await row.locator("xpath=.//td[2]").innerText()
    let capital = await row.locator("xpath=.//td[3]").innerText()
    let currency = await row.locator("xpath=.//td[4]").innerText()
    let language = await row.locator("xpath=.//td[5]").innerText()
    let county: Country = {
      name: contryName,
      capital: capital,
      currency: currency,
      language: language
    }
    countries.push(county)
  }

  console.log(countries[5])
  console.log("END")
  //await page.pause()
});


export interface Country {
  name: string,
  capital: string,
  currency: string,
  language: string
}
