import {classNames} from "@/shared/lib/classNames/classNames";
import cls from "./Button.module.scss"
import {ButtonHTMLAttributes, ReactNode} from "react";

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINED = 'outlined',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    className?: string;
    theme?: ThemeButton;
}

export const Button = (props: ButtonProps) => {
    const {
        children,
        className,
        theme,
        ...otherProps
    } = props;
    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};