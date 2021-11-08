/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    publicRuntimeConfig: {
        featureFlags: {
            counter: process.env.FF_COUNTER,
        },
    },
}
