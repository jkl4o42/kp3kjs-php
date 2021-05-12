import React, {useState} from 'react';
import {Icon, Input, List} from "semantic-ui-react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {updateStudentData, removeStudent} from "../../actions/students";

const ListItem = ({ student, updateStudentData, removeStudent }) => {
    const [update, setUpdate] = useState(false);
    const [name, setName] = useState(student.fullName);

    const updateStudent = () => {
        if (update) {
            updateStudentData({ fullName: name, id: student.id });
            setUpdate(false);
        } else {
            setUpdate(true);
        }
    }

    return (
        <List.Item>
            <List.Icon name='user' size='large' verticalAlign='middle' />
            <List.Content>
                <List.Description as='a'>
                    <span>
                        { update ?
                            <Input
                                placeholder="Name ..."
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            : name
                        }
                    </span>
                    <div className="actions">
                        <Icon className={update ? "update active" : "update"} onClick={updateStudent} name="pencil alternate"/>
                        <Icon className="delete" name="close" onClick={() => removeStudent(student.id)}/>
                    </div>
                </List.Description>
            </List.Content>
        </List.Item>
    );
};

const actions = { updateStudentData, removeStudent };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(ListItem);
