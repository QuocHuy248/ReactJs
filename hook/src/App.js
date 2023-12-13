import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import NewsPage from "./pages/News";
import DefautLayout from "./layout/defaultLayout/DefautLayout";
import { publicRoutes } from "./routes/routes";
import { Fragment } from "react";
// import { publicRoutes } from ".routes/routes";
function App() {
    return (
        <div className="app">
            {/* <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/news">News</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav> */}

            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    let Layout = DefautLayout;

                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
            {/* <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes> */}
        </div>
    );
}

export default App;
