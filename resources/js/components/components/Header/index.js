import React from 'react';
import {NavLink} from "react-router-dom";
import {HOME_PAGE, LECTURES_PAGE, SCHEDULE_PAGE, STUDENTS_PAGE} from "../../utils/routesConsts";
import "./styles.scss";

const Header = () => {
    return (
        <div className="Header">
            <NavLink to={HOME_PAGE}>
                <h1>Journal</h1>
            </NavLink>
            <div className="links">
                <NavLink to={STUDENTS_PAGE}>Students</NavLink>
                <NavLink to={LECTURES_PAGE}>Lectures</NavLink>
                <NavLink to={SCHEDULE_PAGE}>Schedule</NavLink>
            </div>
        </div>
    );
};

export default Header;
