const { test } = require('@playwright/test')

test.describe('Examples', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/checkboxes')
    })

    test('Box check/uncheck', async ({ page }) => {
        await page.getByRole('checkbox').first().check()
        await page.locator('input[type="checkbox"]').nth(1).uncheck()
        await page.locator('[type="checkbox"]').nth(0).uncheck()
        await page.pause()
    })
})