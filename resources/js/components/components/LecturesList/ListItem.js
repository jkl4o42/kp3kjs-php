import React, {useState} from 'react';
import {Icon, Input, List} from "semantic-ui-react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {updateLectureData, removeLecture} from "../../actions/lectures";

const ListItem = ({ lecture, updateLectureData, removeLecture }) => {
    const [update, setUpdate] = useState(false);
    const [name, setName] = useState(lecture.name);

    const updateStudent = () => {
        if (update) {
            updateLectureData({ name, id: lecture.id });
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
                        <Icon className="delete" name="close" onClick={() => removeLecture(lecture.id)}/>
                    </div>
                </List.Description>
            </List.Content>
        </List.Item>
    );
};

const actions = { updateLectureData, removeLecture };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(ListItem);
