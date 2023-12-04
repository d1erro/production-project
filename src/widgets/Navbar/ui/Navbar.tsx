import cls from "./Navbar.module.scss"
import {classNames} from "@/shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "@/shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.INVERTED} to="/" className={cls.mainLink}>MAIN PAGE</AppLink>
                <AppLink theme={AppLinkTheme.INVERTED} to="/about">ABOUT PAGE</AppLink>
            </div>
        </div>
    );
};