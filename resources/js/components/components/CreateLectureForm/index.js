import React, {useState} from 'react';
import {Button, Input} from "semantic-ui-react";
import './styles.scss';

const CreateLectureForm = ({ create }) => {
    const [name, setName] = useState('');

    const submit = () => {
        create({ name });
    };

    return (
        <div className="CreateStudentForm">
            <Input
                placeholder='Lecture name ...'
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <Button color="orange" onClick={submit}>Create</Button>
        </div>
    );
};

export default CreateLectureForm;
