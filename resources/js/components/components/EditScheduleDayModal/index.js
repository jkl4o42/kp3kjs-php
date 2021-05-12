import React, {useEffect, useState} from 'react';
import {Button, Icon, Input, Modal} from "semantic-ui-react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import CustomSelect from "../CustomSelect";
import {getAllLecture} from "../../actions/lectures";
import {addNewSchedule, removeSchedule} from "../../actions/schedules";
import './styles.scss';


const EditScheduleDayModal = ({
    day,
    close,
    lectures,
    getAllLecture,
    scheduleList,
    addNewSchedule,
    removeSchedule
}) => {
    const [selectedLecture, setSelectedLecture] = useState(undefined);
    const [sequenceNum, setSequenceNum] = useState(1);
    const [error, setError] = useState(undefined);

    useEffect(() => {
        if (!lectures.length) {
            getAllLecture();
        }

    }, []);

    scheduleList.sort((a,b) => {
        if (a.sequenceNumber === b.sequenceNumber) {
            return 0;
        }

        return a.sequenceNumber > b.sequenceNumber ? 1 : -1;
    });

    const addLectureToSchedule = () => {
        if (sequenceNum > 0 && selectedLecture) {
            addNewSchedule({
                day,
                lectureId: selectedLecture,
                sequenceNumber: sequenceNum
            });
            setSelectedLecture(undefined);
            setSequenceNum(1);
            setError(undefined);
        } else {
            setError('All fields are required!');
        }
    };

    return (
        <Modal
            className="EditScheduleDayModal"
            onClose={close}
            open={day ? true : false}
        >
            <Modal.Header>{day}</Modal.Header>
            <Modal.Content>
                <h2>Change schedule:</h2>
                { error && <h5>{error}</h5>}
                <form>
                    <CustomSelect
                        placeholder="Choose lecture..."
                        options={lectures.map(lecture => ({
                            id: lecture.id,
                            text: lecture.name
                        }))}
                        returnValueFunc={setSelectedLecture}
                    />
                    <Input
                        type="number"
                        placeholder="sequence number"
                        value={sequenceNum}
                        onChange={e => setSequenceNum(e.target.value)}
                    />
                    <Button type="button" color="orange" onClick={addLectureToSchedule} >Add</Button>
                </form>
                <Modal.Description>
                    <h2>Lectures:</h2>
                    { scheduleList.length ?
                        scheduleList.map(schedule =>
                            <div className="lectureList">
                                <span>{schedule.sequenceNumber})</span>
                                <span>{schedule.lecture.name}</span>
                                <Icon name="close" onClick={() => removeSchedule(schedule.id)} />
                            </div>
                        )
                        :
                        <div className="empty">No schedule yet!</div>
                    }
                </Modal.Description>
            </Modal.Content>
        </Modal>
    );
};

const actions = {
    getAllLecture,
    addNewSchedule,
    removeSchedule
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = ({ lectures, schedules }, { day }) => ({
    lectures,
    scheduleList: schedules.filter(schedule => schedule.day === day.toLowerCase())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditScheduleDayModal);
