import React from 'react';
import {Card, Icon} from "semantic-ui-react";
import './styles.scss';

const ScheduleDay = ({
    day,
    scheduleList,
    edit
}) => {
    scheduleList.sort((a,b) => {
        if (a.sequenceNumber === b.sequenceNumber) {
            return 0;
        }

        return a.sequenceNumber > b.sequenceNumber ? 1 : -1;
    });

    return (
        <Card className="ScheduleDay">
            <Card.Header>
                <span>{day}</span>
                <Icon name="pencil alternate" onClick={() => edit()} />
            </Card.Header>
            <Card.Description>
                { scheduleList.length ?
                    scheduleList.map(schedule => <span>{schedule.lecture.name}</span>)
                    :
                    <div className="empty">No schedule yet!</div>
                }
            </Card.Description>
        </Card>
    );
};

export default ScheduleDay;
