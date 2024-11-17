const { test, expect } = require('@playwright/test')

test('First Test', async ({ page }) => {
    await page.goto('https://playwright.dev/docs/intro')
    const title = page.locator('.navbar__title')
    await expect(title).toHaveText('Playwright')
})

test.only("Simple Click Test", async ({ page, browserName }) => {
    test.skip(browserName === 'chromium', 'Skipped on Chromium')
    await page.goto('https://the-internet.herokuapp.com/')
    await page.click('text=Add/Remove Elements')
    const element = page.locator('text=Add Element')
    await element.click()
})

test.skip("Dublicated Test", async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/')
    await page.click('text=Add/Remove Elements')
    const element = page.locator('text=Add Element')
    await element.click()
})