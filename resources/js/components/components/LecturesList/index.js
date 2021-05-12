import React from 'react';
import {List} from "semantic-ui-react";
import ListItem from "./ListItem";
import "./styles.scss";

const LecturesList = ({ lectures }) => {
    return (
        <List divided relaxed className="StudentsList">
            { lectures.length
                ? lectures.map(lecture => <ListItem key={lecture.id} lecture={lecture}/>)
                : <div className="empty">No lectures yet!</div>
            }
        </List>
    );
};

export default LecturesList;
