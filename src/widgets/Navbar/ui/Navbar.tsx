import cls from "./Navbar.module.scss"
import { classNames } from "@/shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Modal } from "@/shared/ui/Modal/Modal";

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false)
    const { t } = useTranslation()

    const onToggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev)
    }, [])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}

            >
                {t("Войти")}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem, consequuntur deleniti distinctio dolores, ex, fugit illo ipsam iusto minus nemo nobis non nostrum placeat quae quasi saepe veritatis voluptates.
            </Modal>
        </div>
    )
}
