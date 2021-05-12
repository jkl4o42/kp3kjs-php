import React, {useEffect, useState} from 'react';
import {Container} from "semantic-ui-react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Calendar from "../components/Calendar";
import Journal from "../components/Journal";
import Preloader from "../components/Preloader";
import {getAllSchedules} from "../actions/schedules";
import {getAllStudents} from "../actions/students";
import {getAllVisits} from "../actions/visits";

const HomePage = ({
    getAllSchedules,
    schedules,
    getAllStudents,
    students,
    getAllVisits
}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [chosenDate, setChosenDate] = useState(new Date());

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const filtratedSchedule = { Monday: [], Tuesday: [], Wednesday: [], Thursday: [], Friday: []};

    schedules.sort((a,b) => {
        if (a.sequenceNumber === b.sequenceNumber) {
            return 0;
        }
        return a.sequenceNumber > b.sequenceNumber ? 1 : -1;
    });

    for(let schedule of schedules) {
        const day = days.filter(day => day.toLowerCase() === schedule.day);
        filtratedSchedule[day[0]].push(schedule);
    }

    useEffect(() => {
        Promise.all([
            getAllSchedules(),
            getAllStudents(),
            getAllVisits(chosenDate),
        ]).finally(() => setIsLoading(false));

    }, [chosenDate]);

    if (isLoading) {
        return <Preloader />;
    }

    return (
        <div className="page">
            <Container className="HomePage">
                <div className='calendar'>
                    <span>Choose Day:</span>
                    <Calendar returnDateFunc={setChosenDate} />
                </div>
                <Journal
                    date={chosenDate}
                    students={students}
                    schedule={filtratedSchedule}
                />
            </Container>
        </div>
    );
};

const actions = {
    getAllSchedules,
    getAllStudents,
    getAllVisits
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = ({ schedules, students }) => ({
    schedules,
    students
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);
