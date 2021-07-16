import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

test('I can select a square', async () => {

    let square = await (await driver).findElement(By.id('cell-0'));
    await square.click();
    
})

test('When square selected answer = X', async () => {

    let squareX = await (await driver).findElement(By.id('cell-0'));
    await squareX.getAttribute('X');
    
})

test('When top left square selected answer = X', async () => {
    
    let squareX = await (await driver).findElement(By.id('cell-0'));
    await squareX.getAttribute('X');
    
})

test('When user selects top right the top middle O is returned by computer', async () => {

    let squareO = await (await driver).findElement(By.id('cell-1'));
    await squareO.getAttribute('O');
    
})

test('I can select top right square', async () => {

    let square = await (await driver).findElement(By.id('cell-2'));
    await square.click();
    
})

test('When top right square selected answer = X', async () => {
    
    let squareX = await (await driver).findElement(By.id('cell-2'));
    await squareX.getAttribute('X');
    
})