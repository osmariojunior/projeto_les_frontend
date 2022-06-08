// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('calculo de salario', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').usingServer('http://localhost:4444/wd/hub').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('calculo de salario', async function() {
    // Test name: calculo de salario
    // Step # | name | target | value
    // 1 | open | / | 
    await driver.get("http://localhost:3000/login/")
    // 2 | setWindowSize | 1440x817 | 
    await driver.manage().window().setRect({ width: 1440, height: 817 })
    // 3 | click | name=name | 
    await driver.findElement(By.name("name")).click()
    // 4 | type | name=name | jose
    await driver.findElement(By.name("name")).sendKeys("jose")
    // 5 | click | css=.field:nth-child(5) > .input | 
    await driver.findElement(By.css(".field:nth-child(5) > .input")).click()
    // 6 | type | css=.field:nth-child(5) > .input | isso é um teste
    await driver.findElement(By.css(".field:nth-child(5) > .input")).sendKeys("isso é um teste")
    // 7 | click | name=dollarSalary | 
    await driver.findElement(By.name("dollarSalary")).click()
    // 8 | type | name=dollarSalary | 3400
    await driver.findElement(By.name("dollarSalary")).sendKeys("3400")
    // 9 | click | id=botao | 
    await driver.findElement(By.id("botao")).click()
    // 10 | click | id=container-login | 
    await driver.findElement(By.id("container-login")).click()
    // 11 | click | id=container-login | 
    await driver.findElement(By.id("container-login")).click()
    // 12 | click | id=container-login | 
    await driver.findElement(By.id("container-login")).click()
  })
})