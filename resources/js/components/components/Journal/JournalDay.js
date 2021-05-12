import React, {useState} from 'react';
import {normalizeDate} from "../../helpers/dateNormalizer";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {createVisitsStatus, removeVisitMark} from "../../actions/visits";
import {Icon} from "semantic-ui-react";

const JournalDay = ({
    daySchedule,
    students,
    date,
    createVisitsStatus,
    visits,
    removeVisitMark,
    chosenDate
}) => {
    const [forseUpdate, setForceUpdate] = useState(undefined);
    const dateStr = normalizeDate(date).dateStr;
    const chosenDateStr = normalizeDate(chosenDate).dateStr;

    const visitsForLecture = {};
    if (visits) {
        visits.map(visit => {
            if (!visitsForLecture[visit.lectureId]) {
                visitsForLecture[visit.lectureId] = [];
            }

            visitsForLecture[visit.lectureId].push(visit.studentId);
        });
    }

    const changeVisitStatus = (studentId, lectureId) => {
        if (visitsForLecture[lectureId] && visitsForLecture[lectureId].indexOf(studentId) !== -1) {
            removeVisitMark(dateStr,lectureId, studentId)
                .then(() =>  setForceUpdate(Date.now()));
        } else {
            createVisitsStatus({
                studentId,
                lectureId,
                date: dateStr,
                visited: false
            }).then(() =>  setForceUpdate(Date.now()));
        }
    };

    return (
        <div className={dateStr === chosenDateStr ?  "JournalDay chosen" :  "JournalDay"}>
            <h5>{normalizeDate(date).dayNumber + '.' + normalizeDate(date).month.string}</h5>
            <div className="lectures">
                { daySchedule.length
                    ? daySchedule.map(schedule => <div key={schedule.id} >{schedule.lecture.name}</div>)
                    : <div className="empty">No schedule</div>
                }
            </div>
            <div className="visitFields">
                { (daySchedule.length && students.length)
                    ? daySchedule.map(schedule =>
                        <div className="column" key={schedule.id}>
                            {students.map(student =>
                                <div
                                    key={student.id}
                                    className="field"
                                    onClick={() => changeVisitStatus(student.id, schedule.lectureId)}
                                >{(visitsForLecture[schedule.lectureId] && visitsForLecture[schedule.lectureId].indexOf(student.id) !== -1)
                                    ? <Icon name="close" />
                                    : null
                                }</div>
                            )}
                        </div>
                    ) : null
                }
            </div>
        </div>
    );
};

const actions = { createVisitsStatus, removeVisitMark };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = ({ visits }, { date }) => ({
    visits: visits[normalizeDate(date).dateStr]
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(JournalDay);
