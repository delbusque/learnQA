const { PlaywrightTestConfig } = require('@playwright/test')

const config = {
    retries: 0,
    timeout: 100000,
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
            name: 'Chrome',
            use: { browserName: 'chromium' }
        },
        {
            name: 'Webkit',
            use: { browserName: 'webkit' }
        }
    ]
}

module.exports = config