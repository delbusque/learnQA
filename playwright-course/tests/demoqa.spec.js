const { test, expect } = require('@playwright/test')

test.describe('Form example', () => {

    test('Testing selectors', async ({ page }) => {
        await page.goto('https://demoqa.com/text-box')
        await page.locator('#userName').fill('Test User')
        await page.locator('[placeholder="name@example.com"]').fill('test@hi.com')
        await page.locator('textarea').locator('nth=0').fill('Plovdiv')
        await page.locator('button:has-text("Submit")').click()
        await page.pause()
    })

    test.only('Testing assertions', async ({ page }) => {
        await page.goto('https://demoqa.com/text-box')
        await page.locator('#userName').fill('Test User')
        await page.locator('button:has-text("Submit")').click()
        const name = page.locator('#name')
        await expect.soft(name).toHaveText('Name:Test User')
        await expect(name).toHaveText('Name:Test User')
        await expect(page).toHaveTitle('DEMOQA')
        await expect(page).not.toHaveTitle('DEMOQAq')
    })
})