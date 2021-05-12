import React, {useEffect, useState} from 'react';
import {Container} from "semantic-ui-react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import ScheduleDay from "../components/ScheduleDay";
import EditScheduleDayModal from "../components/EditScheduleDayModal";
import Preloader from "../components/Preloader";
import {getAllSchedules} from "../actions/schedules";

const SchedulePage = ({
    getAllSchedules,
    schedules
}) => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const [isLoading, setIsLoading] = useState(true);
    const [editScheduleDay, setEditScheduleDay] = useState(undefined);

    useEffect(() => {
        getAllSchedules()
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <Preloader />;
    }

    return (
        <div className="page">
            { editScheduleDay &&
            <EditScheduleDayModal
                day={editScheduleDay}
                close={() => setEditScheduleDay(undefined)}
            /> }
            <Container className="SchedulePage">
                <h2>Schedule:</h2>
                <div className="ScheduleList">
                    {days.map(day =>
                        <ScheduleDay
                            key={day}
                            day={day}
                            scheduleList={schedules.filter(schedule => schedule.day === day.toLowerCase() )}
                            edit={() => setEditScheduleDay(day)}
                        />
                    )}
                </div>
            </Container>
        </div>
    );
};

const actions = { getAllSchedules };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = ({ schedules }) => ({
    schedules,
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SchedulePage);
