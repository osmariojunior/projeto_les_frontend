// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('cadastro', function() {
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
  it('cadastro', async function() {
    // Test name: cadastro
    // Step # | name | target | value
    // 1 | open | / | 
    await driver.get("http://localhost:3000/login/")
    // 2 | setWindowSize | 1440x817 | 
    await driver.manage().window().setRect({ width: 1440, height: 817 })
    // 3 | click | linkText=Cadastro | 
    await driver.findElement(By.linkText("Cadastro")).click()
    // 4 | type | name=email | jose.obatista@souunit.com.br
    await driver.findElement(By.name("email")).sendKeys("jose.obatista@souunit.com.br")
    // 5 | type | name=senha | 12345
    await driver.findElement(By.name("senha")).sendKeys("12345")
    // 6 | click | name=nome | 
    await driver.findElement(By.name("nome")).click()
    // 7 | type | name=nome | jose
    await driver.findElement(By.name("nome")).sendKeys("jose")
    // 8 | type | name=sobrenome | osmario
    await driver.findElement(By.name("sobrenome")).sendKeys("osmario")
    // 9 | click | name=telefone | 
    await driver.findElement(By.name("telefone")).click()
    // 10 | type | name=telefone | osmariojr
    await driver.findElement(By.name("telefone")).sendKeys("osmariojr")
    // 11 | click | name=senha | 
    await driver.findElement(By.name("senha")).click()
    // 12 | type | name=senha | 12345678
    await driver.findElement(By.name("senha")).sendKeys("12345678")
    // 13 | click | id=botaoCadastro | 
    await driver.findElement(By.id("botaoCadastro")).click()
    // 14 | type | name=nickname | jose.obatista@souunit.com.br
    await driver.findElement(By.name("nickname")).sendKeys("jose.obatista@souunit.com.br")
    // 15 | type | name=password | 12345
    await driver.findElement(By.name("password")).sendKeys("12345")
  })
})
