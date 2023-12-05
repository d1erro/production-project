import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher'
import { LangSwitcher } from '@/widgets/LangSwitcher'
import { Button, ThemeButton } from '@/shared/ui/Button/Button'

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <div className={cls.switchers}>
                <div className={cls.top}>
                    <Button
                        theme={ThemeButton.OUTLINED}
                        className={cls.sidebarSwitcher}
                        onClick={onToggle}
                    >
                        toggle
                    </Button>
                </div>
                <div className={cls.bottom}>
                    <ThemeSwitcher/>
                    <LangSwitcher className={cls.lang}/>
                </div>
            </div>
        </div>
    )
}
