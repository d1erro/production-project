import { lazy } from "react"

export const MainPageAsync = lazy(async () => await new Promise(response => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    setTimeout(() => { response(import("./MainPage")) }, 1500)
}))
