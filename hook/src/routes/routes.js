import HomePage from "../pages/Home";
import NewsPage from "../pages/News";
import ContactPage from "../pages/Contact";
import InfoPage from "../pages/Info";
import CreatePage from "../pages/Create";
import HeaderLayout from "../layout/headerOnly/HeaderLayout";

const publicRoutes = [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/contact",
        component: ContactPage,
    },
    {
        path: "/news",
        component: NewsPage,
    },
    {
        path: "/info",
        component: InfoPage,
        layout: null,
    },
    {
        path: "/create",
        component: CreatePage,
        layout: HeaderLayout,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
