import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from '@/shared/ui/Button/Button'
import { classNames } from '@/shared/lib/classNames/classNames'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()

    const changeLanguage = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={changeLanguage}
        >
            {t('Язык')}
        </Button>
    )
}
