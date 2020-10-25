import React, { Component } from "react";
import HousingDataRecordRowElement from "./HousingDataRecordRowElement/HousingDataRecordRowElement";
import { Table } from "react-bootstrap";

class HousingDataRecordsElement extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const records = this.props.housingData;
        return (
            <Table striped bordered hover size="sm" className="mt-5">
                <thead>
                    <tr>
                        <th>ID#</th>
                    </tr>
                </thead>
                <tbody>
                    {records && records.length
                        ? records.map((record, index) => {
                            return <HousingDataRecordRowElement key={record.id} record={record} />;
                        }) : <tr><td>No Records Found</td></tr>
                    }
                </tbody>
            </Table>
        )
    }
}

export default HousingDataRecordsElement;