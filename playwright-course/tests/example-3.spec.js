const { test, expect } = require('@playwright/test')

test.describe('Examples', () => {

    test('Box check/uncheck', async ({ page }) => {
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

    test('Drop down', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/dropdown')
        await page.locator('select').selectOption('1')
        await expect(page.locator('select')).toHaveValue('1')
        await page.locator('#dropdown').selectOption({ label: 'Option 2' })
        await expect(page.locator('#dropdown')).toHaveValue('2')
        await page.pause()
    })

    test.only('iFrame', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/iframe')
        const iFrame = page.frameLocator('#mce_0_ifr').locator('#tinymce')
        await expect(iFrame.getByRole('paragraph')).toHaveText('Your content goes here.')
        await page.pause()
    })
})