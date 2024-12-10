const { PlaywrightTestConfig } = require('@playwright/test')

const config = {
    retries: 1,
    timeout: 15000,
    reporter: './reporter.js',
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        video: 'off',
        screenshots: 'only-on-failure',
        trace: 'on-first-retry',
    },

    projects: [
        {
            name: 'chrome',
            use: { browserName: 'chromium' }
        },
        {
            name: 'webkit',
            use: { browserName: 'webkit' }
        }
    ]
}

module.exports = config