import {
    Link,
    Route,
    Routes,
} from "react-router-dom";
import './styles/index.scss'
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPageAsync";
import {Suspense} from "react";
import {useTheme} from "./theme/useTheme";

export default function App() {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <div>
                <Link to="/">MAIN PAGE</Link>
                <Link to="/about">ABOUT PAGE</Link>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPageAsync/>} />
                    <Route path="/about" element={<AboutPageAsync/>} />
                </Routes>
            </Suspense>
        </div>
    )
}
