import { classNames } from "@/shared/lib/classNames/classNames"
import { Theme, useTheme } from "@/app/providers/ThemeProvider"
import DarkIcon from "@/shared/assets/icons/dark_mode.svg"
import LightIcon from "@/shared/assets/icons/light_mode.svg"
import { Button, ButtonTheme } from "@/shared/ui/Button/Button"

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()

    console.log(theme)

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames("", {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? <DarkIcon/> : <LightIcon/>}
        </Button>
    )
}
