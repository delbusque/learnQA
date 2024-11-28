const { test, expect } = require('@playwright/test')

test.describe.parallel("Smoke tests", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/')
    })

    test.afterEach(async ({ page }) => {
        console.log('This test finished !');
    })

    test("Simple Click Test @regressions-smoke", async ({ page }) => {
        await page.click('text=Add/Remove Elements')
        // await page.screenshot({ path: 'screenshot.jpg', fullPage: true })

        const element = page.locator('text=Add Element')
        // await element.screenshot({ path: 'buttonScreenshot.png' })
        await element.click()
    })
    test("Form Test @smoke", async ({ page }) => {
        await page.click('text=Form Authentication')
    })
})

test.skip("First Test", { tag: ['@smoke'] }, async ({ page }) => {
    await page.goto('https://playwright.dev/docs/intro')
    const title = page.locator('.navbar__title')
    await expect(title).toHaveText('Playwright')
    console.log('This test finished !');
})

