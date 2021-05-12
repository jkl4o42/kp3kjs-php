import React, {useEffect, useState} from 'react';
import {Container, Icon} from "semantic-ui-react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getAllStudents, addNewStudent} from "../actions/students";
import StudentsList from "../components/StudentsList";
import CreateStudentForm from "../components/CreateStudentForm";
import Preloader from "../components/Preloader";

const StudentsPage = ({
    students,
    getAllStudents,
    addNewStudent
}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [openAddStudent, setOpenAddStudent] = useState(false);

    useEffect(() => {
        getAllStudents()
            .finally(() => setIsLoading(false));
    }, []);

    const createStudent = (data) => {
        addNewStudent(data);
        setOpenAddStudent(false);
    };

    if (isLoading) {
        return <Preloader />;
    }

    return (
        <div className="page">
            <Container className="StudentsPage">
                <span>
                    <h2>Students:</h2>
                    { openAddStudent
                        ? <Icon name="close" onClick={() => setOpenAddStudent(false)} />
                        : <Icon name="plus circle" onClick={() => setOpenAddStudent(true)}/>
                    }
                </span>
                { openAddStudent && <CreateStudentForm create={createStudent} /> }
                <StudentsList students={students} />
            </Container>
        </div>
    );
};

const actions = { getAllStudents, addNewStudent };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = ({ students }) => ({
   students,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StudentsPage);
