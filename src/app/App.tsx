import {Link} from "react-router-dom";
import './styles/index.scss'
import {classNames} from "@/shared/lib/classNames/classNames";
import {useTheme} from "@/app/providers/ThemeProvider";
import {AppRouter} from "@/app/providers/router";

export default function App() {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {hovered: true, selected: true}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <div>
                <Link to="/">MAIN PAGE</Link>
                <Link to="/about">ABOUT PAGE</Link>
            </div>
            <AppRouter/>
        </div>
    )
}
