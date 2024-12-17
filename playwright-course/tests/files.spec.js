const { test, expect } = require('@playwright/test')

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

    test.only('Upload', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/upload')
        await page.setInputFiles('#file-upload', 'reporter.js')
        await page.pause()

        await page.locator('input:has-text("Upload")').click()
        await expect(page.locator('#uploaded-files')).toHaveText('reporter.js')
        await expect(page.locator('text="reporter.js"')).toBeVisible()
        await page.pause()
    })
})