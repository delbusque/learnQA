const { test, expect } = require('@playwright/test')

test('First Test', async ({ page }) => {
    await page.goto('https://playwright.dev/docs/intro')
    const title = page.locator('.navbar__title')
    await expect(title).toHaveText('Playwright')
})

test("Simple Click Test", async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/')
    await page.locator('text=Add/Remove Elements').click()
    await page.pause()
    await page.locator('text=Add Element').click()
    await page.pause()
})