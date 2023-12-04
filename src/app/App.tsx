import {
    Link,
    Route,
    Routes,
} from "react-router-dom";
import './styles/index.scss'
import {Suspense} from "react";
import {classNames} from "@/shared/lib/classNames/classNames";
import {useTheme} from "@/app/providers/ThemeProvider";
import {AboutPage} from "@/pages/AboutPage";
import {MainPage} from "@/pages/MainPage";

export default function App() {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {hovered: true, selected: true}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <div>
                <Link to="/">MAIN PAGE</Link>
                <Link to="/about">ABOUT PAGE</Link>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/about" element={<AboutPage/>} />
                </Routes>
            </Suspense>
        </div>
    )
}
