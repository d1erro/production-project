import { lazy } from "react"

// eslint-disable-next-line promise/param-names
export const AboutPageAsync = lazy(async () => await new Promise(response => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    setTimeout(() => { response(import("./AboutPage")) }, 1500)
}))
