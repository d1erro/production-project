import { classNames } from "@/shared/lib/classNames/classNames"
import cls from "./Sidebar.module.scss"
import { useState } from "react"
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher"
import { LangSwitcher } from "@/widgets/LangSwitcher"
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/Button/Button"
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { RoutePath } from "@/shared/config/routerConfig/routerConfig";
import AboutIcon from "@/shared/assets/icons/about_icon.svg";
import MainIcon from "@/shared/assets/icons/main_icon.svg"

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    const { t } = useTranslation();

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={cls.collapsedBtn}
                onClick={onToggle}
                square
                size={ButtonSize.L}
            >
                {collapsed ? ">" : "<"}
            </Button>

            <div className={cls.items}>
                <AppLink
                    theme={AppLinkTheme.INVERTED}
                    to={RoutePath.main}
                    className={cls.item}
                >
                    <MainIcon className={cls.icon}/>
                    <span className={cls.link}>{t("Главная страница")}</span>
                </AppLink>

                <AppLink
                    theme={AppLinkTheme.INVERTED}
                    to={RoutePath.about}
                    className={cls.item}
                >
                    <AboutIcon className={cls.icon}/>
                    <span className={cls.link}>{t("О сайте")}</span>
                </AppLink>

            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher
                    className={cls.lang}
                    short={collapsed}
                />
            </div>

        </div>
    )
}
