import {
    Link,
    Route,
    Routes,
} from "react-router-dom";
import './index.scss'
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPageAsync";
import {Suspense} from "react";

export default function App() {
    return (
        <div className="app">
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
