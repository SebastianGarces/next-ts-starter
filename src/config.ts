import getConfig from "next/config"

const { publicRuntimeConfig } = getConfig()

const featureFlags = {
    counter: parseInt(publicRuntimeConfig.featureFlags.counter, 2),
}

export default {
    featureFlags,
}
