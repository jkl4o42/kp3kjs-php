import React from 'react';
import {List} from "semantic-ui-react";
import ListItem from "./ListItem";
import "./styles.scss";

const StudentsList = ({ students }) => {
    return (
        <List divided relaxed className="StudentsList">
            { students.length
                ? students.map(student => <ListItem key={student.id} student={student}/>)
                : <div className="empty">No students yet!</div>
            }
        </List>
    );
};

export default StudentsList;
