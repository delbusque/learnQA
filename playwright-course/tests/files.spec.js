const { test } = require('@playwright/test')

test.describe('File operations', () => {
    test('Download', async ({ page }) => {

        await page.goto('https://the-internet.herokuapp.com/download')

        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.locator('.example').locator('text=sample.txt').click()
        ])

        const path = await download.path()
        const url = download.url()
    })
})