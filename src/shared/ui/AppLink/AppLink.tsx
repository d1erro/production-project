import cls from "./AppLink.module.scss"
import { classNames } from "@/shared/lib/classNames/classNames"
import { Link, type LinkProps } from "react-router-dom"
import { type ReactNode } from "react"

export enum AppLinkTheme {
    PRIMARY = "primary",
    INVERTED = "inverted",
}

interface AppLinkProps extends LinkProps {
    children?: ReactNode
    className?: string
    theme?: AppLinkTheme
}

export const AppLink = (props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, { theme }, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    )
}
