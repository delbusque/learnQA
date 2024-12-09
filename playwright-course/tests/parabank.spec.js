const { test, expect } = require("playwright/test")

test.describe('Authentication', () => {
    test.use({ storageState: 'auth/paraAuth.json' })
    test.beforeEach(async ({ page }) => {
        await page.goto('https://parabank.parasoft.com');
    })

    test.skip('Saving Authentication', async ({ page }) => {
        await page.locator('input[name="username"]').click();
        await page.locator('input[name="username"]').fill('delbusque');
        await page.locator('input[name="username"]').press('Tab');
        await page.locator('input[name="password"]').fill('admin');
        await page.getByRole('button', { name: 'Log In' }).click();

        await page.context().storageState({ path: 'auth/paraAuth.json' })
    })

    test('Test 3', async ({ page }) => {
        await page.locator('#leftPanel').getByRole('link', { name: 'Bill Pay' }).click();
    })

    test('Test 2', async ({ page }) => {
        await page.locator('#leftPanel').getByRole('link', { name: 'Transfer Funds' }).click();
    })
})

// npx playwright codegen --save-storage=auth/auth.json parabank.parasoft.com
// npx playwright codegen --load-storage=auth/auth.json parabank.parasoft.com

// npx playwright codegen --viewport-size=800,600 --color-scheme=dark x.com 