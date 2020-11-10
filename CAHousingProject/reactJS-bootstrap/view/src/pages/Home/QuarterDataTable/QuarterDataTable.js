//React-Bootstrap
import React, { Component } from 'react';
import { Row, Col, Table } from 'react-bootstrap';
//Redux Store Connector
import { connect } from "react-redux";
//Page Components
import QuarterDataRecord from "./QuarterDataRecord/QuarterDataRecord";


class QuarterDataTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            longitudeMin: 0,
            latitudeMin: 0,
            ageMin: 0,
            roomsMin: 0,
            bedsMin: 0,
            holdsMin: 0,
            incomeMin: 0,
            valueMin: 0,
            populationMin: 0,
            OceanProxMin: null
        }
    }

    render() {
        const records = this.props.housingData;
        //...
        return (            
            <Row>
                <Col>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Longitude</th>
                                <th>Latitude</th>
                                <th>Age</th>
                                <th>Rooms</th>
                                <th>Beds</th>
                                <th>Holds</th>
                                <th>Income</th>
                                <th>Value</th>
                                <th>Population</th>
                                <th>Ocean Prox</th>
                            </tr>
                        </thead>
                        <tbody>
                            {records && records.length
                                ? records.map((record, index) => {
                                    return <QuarterDataRecord key={record.id} record={record} />;
                                }) : <tr><td>No Records Found</td></tr>
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>            
        )
    }
}

export default connect(null)(QuarterDataTable);