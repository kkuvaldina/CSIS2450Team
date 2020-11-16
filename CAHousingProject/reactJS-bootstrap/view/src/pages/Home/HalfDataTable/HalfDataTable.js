//React-Bootstrap
import React, { Component } from 'react';
import { Row, Col, Table } from 'react-bootstrap';
//Redux Store Connector
import { connect } from "react-redux";
//Page Components
import HalfDataRecord from "./HalfDataRecord/HalfDataRecord";

class HalfDataTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            longitudeTotal: 0,
            latitudeTotal: 0,
            ageTotal: 0,
            roomsTotal: 0,
            bedsTotal: 0,
            holdsTotal: 0,
            incomeTotal: 0,
            valueTotal: 0,
            populationTotal: 0,
            OceanProxTotal: null
        }
    }

    ageHalf = () => {
        if (this.props.housingData != null) {
            var count = 0;
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.props.housingData[i].housing_median_age) {
                    count++;
                }
                //this.state.ageTotal += parseFloat(this.props.housingData[i].housing_median_age);
            }

            console.log(count);
            console.log(typeof count);

            return this.state.ageTotal / 2;
        }
        return null;
    }

    bedsHalf = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.props.housingData[i].total_bedrooms == "") {
                    this.state.bedsTotal += 0.0
                } else {
                    this.state.bedsTotal += parseFloat(this.props.housingData[i].total_bedrooms);
                }
            }
            return this.state.bedsTotal / 2;
        }
        return null;
    }

    holdsHalf = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.holdsTotal += parseFloat(this.props.housingData[i].households);
            }
            return this.state.holdsTotal / 2;
        }
        return null;
    }

    incomeHalf = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.incomeTotal += parseFloat(this.props.housingData[i].median_income);
            }
            return this.state.incomeTotal / 2;
        }
        return null;
    }

    latitudeHalf = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.latitudeTotal += parseFloat(this.props.housingData[i].latitude);
            }
            return this.state.latitudeTotal / 2;
        }
        return null;
    }

    longitudeHalf = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.longitudeTotal += parseFloat(this.props.housingData[i].longitude);
            }
            return this.state.longitudeTotal / 2;
        }
        return null;
    }

    populationHalf = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.populationTotal += parseFloat(this.props.housingData[i].population);
            }
            return this.state.populationTotal / 2;
        }
        return null;
    }

    roomsHalf = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.roomsTotal += parseFloat(this.props.housingData[i].total_rooms);
            }
            return this.state.roomsTotal / 2;
        }
        return null;
    }

    valueHalf = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.valueTotal += parseFloat(this.props.housingData[i].median_house_value);
            }
            return this.state.valueTotal / 2;
        }
        return null;
    }

    render() {
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
                            </tr>
                        </thead>
                        <tbody>
                            <HalfDataRecord
                                //longitude={this.longitudeHalf()}
                                //latitude={this.latitudeHalf()}
                                age={this.ageHalf()}
                                //rooms={this.roomsHalf()}
                                //bedrooms={this.bedsHalf()}
                                //holds={this.holdsHalf()}
                                //income={this.incomeHalf()}
                                //value={this.valueHalf()}
                                //population={this.populationHalf()}
                            />
                        </tbody>
                    </Table>
                </Col>
            </Row>            
        )
    }
}

export default connect(null)(HalfDataTable);