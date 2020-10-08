import React from "react";
import { connect } from "react-redux";
/*
import { toggleUserAdminStatus, editUserEmail, toggleUserAccountStatus } from "../../redux/actions";
*/
//import { Button, ButtonGroup, FormControl, InputGroup, Popover, OverlayTrigger } from "react-bootstrap";

/*
let input = "";

const handleSubmit = (id, user) => {
    console.log(id, user, input);
    editUserEmail(id, user, input)
}

const updateInput = (_input) => {
    input = _input;
}
*/

const RecordElement = ({ record }) => (
    <tr>
        <td>
            {record.id}
        </td>
    </tr>
);

export default connect(
    null
)(RecordElement);