const { test } = require('@playwright/test')

test.describe('Examples', () => {

    test.skip('Box check/uncheck', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/checkboxes')
        await page.getByRole('checkbox').first().check()
        await page.locator('input[type="checkbox"]').nth(1).uncheck()
        await page.locator('[type="checkbox"]').nth(0).uncheck()
        await page.pause()
    })

    test('Drag and drop', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/drag_and_drop')
        await page.dragAndDrop('#column-a', '#column-b')
        await page.pause()
    })
})