import { test, expect } from '@playwright/test';


test('prueba 1', async ({ page }) => {

  await page.goto('https://www.google.com/');

  await expect(page).toHaveTitle(/Google/);

  await page.locator("//*[@id=\"APjFqb\"]").fill("Diomedes díaz")
  await page.waitForTimeout(2000)
  await page.keyboard.press("Enter")
  await page.waitForTimeout(2000)
  await page.mouse.wheel(0, 1200)
  await page.locator("//*[@id=\"kp-wp-tab-overview\"]/div[2]/div/div/div/div/div/div[1]/div/div/span/a/div/div/div/div[2]/cite").click()
  await page.waitForTimeout(2000)

});

test('test novey', async ({ page }) => {
  
  await page.goto('https://www.novey.com.pa/');
  await page.locator('//*[@placeholder="¿Qué estás buscando?"]').first().fill("azadores")
  await page.waitForTimeout(2000)
  await page.keyboard.press("Enter")
});

test('test novey 2', async ({ page }) => {
  await page.goto('https://www.novey.com.pa/');
  await page.getByPlaceholder("¿Qué estás buscando?").first().fill("azadores")
  await page.waitForTimeout(2000)
  await page.keyboard.press("Enter")
 
});

test('test cochez', async ({ page }) => {
  await page.goto('https://www.cochezycia.com/');
  await page.waitForTimeout(2000)
  await page.mouse.wheel(0, 1600)
  await page.waitForTimeout(2000)
  await page.getByAltText("Lleva Más, Paga Menos - Cemento gris uso general Cemex - 10 unidades").first().click()
  await page.waitForTimeout(2000)

});


test('prueba 4', async ({ page }) => {

  await page.goto('https://www.google.com/');

  await expect(page).toHaveTitle(/Google/);

  await page.locator("//*[@id=\"APjFqb\"]").fill("Diomedes díaz")
  await page.waitForTimeout(2000)
  await page.keyboard.press("Enter")
  await page.waitForTimeout(2000)
  await page.mouse.wheel(0, 1200)
  await page.getByRole('heading', { name: 'Diomedes Díaz - Wikipedia, la enciclopedia libre' }).click()
  await page.waitForTimeout(2000)


});


test('check', async ({ page }) => {

  await page.goto('https://www.selenium.dev/selenium/web/web-form.html');

  await page.waitForTimeout(2000)
  await page.locator("#my-check-1").uncheck()
  await page.waitForTimeout(2000)
  await page.locator("#my-check-2").check()

});
test('RadioButon', async ({ page }) => {

  await page.goto('https://www.selenium.dev/selenium/web/web-form.html');

  await page.waitForTimeout(2000)
  await page.locator("#my-radio-2").check()

});
test('RadioButonByLabel', async ({ page }) => {

  await page.goto('https://www.selenium.dev/selenium/web/web-form.html');

  await page.waitForTimeout(2000)
  await page.getByLabel("Default radio").check();

});

test('getByText', async ({ page }) => {

  await page.goto('https://www.selenium.dev/selenium/web/web-form.html');

  await page.waitForTimeout(2000)
  await page.getByText("Textarea").fill("HOLA MUNDO");
});


test('Dropdown', async ({ page }) => {

  await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
  await page.waitForTimeout(2000)
  const select = await page.locator("body > main > div > form > div > div:nth-child(2) > label:nth-child(1) > select")
  await page.waitForTimeout(2000)
  await select.selectOption({ label: "Two" })
 
});
test('hover', async ({ page }) => {

  await page.goto('https://www.cochezycia.com/');

  await page.locator("#navbar > ul > li:nth-child(1) > #departmentsCO").nth(1).hover()
  await page.getByRole('link', { name: 'Construcción' }).nth(1).hover();
  await page.getByRole('link', { name: 'Alambres' }).nth(1).click();

});


test('Drag and Drop', async ({ page }) => {

  await page.goto('https://www.selenium.dev/selenium/web/mouse_interaction.html');
  await page.waitForTimeout(2000)
  await page.locator('#draggable').dragTo(page.locator('#droppable'));

});
test('Upload file', async ({ page }) => {

  await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
  await page.waitForTimeout(2000)
  await page.getByLabel('Default checkbox').setInputFiles([]);
  await page.locator('//input[@name="my-file"]').setInputFiles({
    name: 'file.txt',
    mimeType: 'text/plain',
    buffer: Buffer.from('this is test')
  });
});

test('hober 2', async ({ page }) => {

  await page.goto('https://www.doitcenter.com.pa/');
  await page.getByRole('link', { name: 'Departamentos' }).click()
  await page.getByText('Deportes', { exact: true }).nth(2).hover()
  await page.getByText('Maletas').nth(1).click()

});

test('multiMax', async ({ page }) => {

  await page.goto('https://www.multimax.net/');
  await page.getByText('Menú').first().click()
  await page.getByLabel('main navigation').getByRole('link', { name: 'Televisores', exact: true }).click()
});

test('multiMax 2', async ({ page }) => {

  await page.goto('https://www.multimax.net/');
  await page.getByText('Menú').first().click()
  const devMenu = await page.locator('#header > section > nav > div > div > div').all()
  console.log("Ini")
  await page.waitForTimeout(2000)
  for (let div of devMenu) {
    if (await (await div.innerText()).match("Hogar")) {
      await div.getByText('Hogar').click()
      await page.waitForTimeout(2000)
      await div.nth(0).getByText('Colchones').click()
      await page.waitForTimeout(2000)
      break
    }
  }
  console.log("END")
});


