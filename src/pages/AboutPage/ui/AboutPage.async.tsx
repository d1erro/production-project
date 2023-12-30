import { lazy } from "react"

export const AboutPageAsync = lazy(async () => await new Promise(response => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    setTimeout(() => { // @ts-expect-error
        response(import("./AboutPage")) }, 1500)
}))
