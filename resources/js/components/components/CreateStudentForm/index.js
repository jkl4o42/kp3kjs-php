import React, {useState} from 'react';
import {Button, Input} from "semantic-ui-react";
import './styles.scss';

const CreateStudentForm = ({ create }) => {
    const [name, setName] = useState('');

    const submit = () => {
        create({ fullName: name });
    };

    return (
        <div className="CreateStudentForm">
            <Input
                placeholder='Name ...'
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <Button color="orange" onClick={submit}>Create</Button>
        </div>
    );
};

export default CreateStudentForm;
