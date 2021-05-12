import React from 'react';
import JournalDay from "./JournalDay";
import './styles.scss';
import {getWeekDates, normalizeDate} from "../../helpers/dateNormalizer";

const Journal = ({
    date,
    students,
    schedule
}) => {
    const weekDays = getWeekDates(date);

    return (
        <div className="Journal">
            <div className="students">
                { students.length
                    ? students.map(student => <div key={student.id} >{student.fullName}</div>)
                    : <div className="empty">No students yet!</div>
                }
            </div>
            <div className="days">
                {weekDays.map(day =>
                    <JournalDay
                        key={day}
                        date={day}
                        chosenDate={date}
                        daySchedule={schedule[normalizeDate(day).day]}
                        students={students}
                    />
                )}
            </div>
        </div>
    );
};


export default Journal;
