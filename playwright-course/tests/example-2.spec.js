const { test, expect } = require('@playwright/test')

test("First Test", { tag: ['@smoke'] }, async ({ page }) => {
    await page.goto('https://playwright.dev/docs/intro')
    const title = page.locator('.navbar__title')
    await expect(title).toHaveText('Playwright')
})

test.only("Simple Click Test @regressions-smoke", async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/')
    await page.click('text=Add/Remove Elements')
    // await page.screenshot({ path: 'screenshot.jpg', fullPage: true })

    const element = page.locator('text=Add Element')
    // await element.screenshot({ path: 'buttonScreenshot.png' })
    await element.click()

})

test("Dublicated Test @regression", async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/')
    await page.click('text=Add/Remove Elements')
    const element = page.locator('text=Add Element')
    await element.click()
})