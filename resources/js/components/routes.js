import * as ROUTES from "./utils/routesConsts";
import HomePage from "./pages/HomePage";
import StudentsPage from "./pages/StudentsPage";
import SchedulePage from "./pages/SchedulePage";
import LecturesPage from "./pages/LecturesPage";

export const routes = [
    {
        path: ROUTES.HOME_PAGE,
        Component: HomePage
    },
    {
        path: ROUTES.STUDENTS_PAGE,
        Component: StudentsPage
    },
    {
        path: ROUTES.SCHEDULE_PAGE,
        Component: SchedulePage
    },
    {
        path: ROUTES.LECTURES_PAGE,
        Component: LecturesPage
    },
];
