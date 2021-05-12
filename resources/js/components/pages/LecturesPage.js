import React, {useEffect, useState} from 'react';
import {Container, Icon} from "semantic-ui-react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addNewLecture, getAllLecture} from "../actions/lectures";
import LecturesList from "../components/LecturesList";
import CreateLectureForm from "../components/CreateLectureForm";
import Preloader from "../components/Preloader";

const LecturesPage = ({
    addNewLecture,
    getAllLecture,
    lectures
}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [openAddLecture, setOpenAddLecture] = useState(false);

    useEffect(() => {
        getAllLecture()
            .finally(() => setIsLoading(false));
    }, []);

    const createLecture = (data) => {
        addNewLecture(data);
        setOpenAddLecture(false);
    };

    if (isLoading) {
        return <Preloader />;
    }

    return (
        <div className="page">
            <Container className="LecturesPage">
                <span>
                    <h2>Lectures:</h2>
                    { openAddLecture
                        ? <Icon name="close" onClick={() => setOpenAddLecture(false)} />
                        : <Icon name="plus circle" onClick={() => setOpenAddLecture(true)}/>
                    }
                </span>
                { openAddLecture && <CreateLectureForm create={createLecture} /> }
                <LecturesList lectures={lectures} />
            </Container>
        </div>
    );
};

const actions = {addNewLecture, getAllLecture};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = ({ lectures }) => ({
    lectures,
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LecturesPage);
