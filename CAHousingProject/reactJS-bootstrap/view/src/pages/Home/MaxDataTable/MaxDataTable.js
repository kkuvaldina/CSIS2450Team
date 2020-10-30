//React-Bootstrap
import React, { Component } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
//Redux Store Connector
import { connect } from "react-redux";
//Page Components
import MaxDataRecord from "./MaxDataRecord/MaxDataRecord";


class MaxDataTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            longitudeMax: 0,
            latitudeMax: 0,
            ageMax: 0,
            roomsMax: 0,
            bedsMax: 0,
            holdsMax: 0,
            incomeMax: 0,
            valueMax: 0,
            populationMax: 0,
            OceanProxMax: null
        }
    }

    ageMax = () => {
        if (this.props.housingData != null) {
            this.state.ageMax = this.props.housingData[0].housing_median_age;
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.state.ageMax < parseFloat(this.props.housingData[i].housing_median_age)) {
                    this.state.ageMax = parseFloat(this.props.housingData[i].housing_median_age);
                }
            }
            return this.state.ageMax;
        }
        return null;
    }

    bedsMax = () => {
        if (this.props.housingData != null) {
            this.state.bedsMax = this.props.housingData[0].total_bedrooms;
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.state.bedsMax < parseFloat(this.props.housingData[i].total_bedrooms)) {
                    this.state.bedsMax = parseFloat(this.props.housingData[i].total_bedrooms);
                }
            }
            return this.state.bedsMax;
        }
        return null;
    }

    holdsMax = () => {
        if (this.props.housingData != null) {
            this.state.holdsMax = this.props.housingData[0].households;
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.state.holdsMax < parseFloat(this.props.housingData[i].households)) {
                    this.state.holdsMax = parseFloat(this.props.housingData[i].households);
                }
            }
            return this.state.holdsMax;
        }
        return null;
    }

    incomeMax = () => {
        if (this.props.housingData != null) {
            this.state.incomeMax = this.props.housingData[0].median_income;
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.state.incomeMax < parseFloat(this.props.housingData[i].median_income)) {
                    this.state.incomeMax = parseFloat(this.props.housingData[i].median_income);
                }
            }
            return this.state.incomeMax;
        }
        return null;
    }

    latitudeMax = () => {
        if (this.props.housingData != null) {
            this.state.latitudeMax = this.props.housingData[0].latitude;
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.state.latitudeMax < parseFloat(this.props.housingData[i].latitude)) {
                    this.state.latitudeMax = parseFloat(this.props.housingData[i].latitude);
                }
            }
            return this.state.latitudeMax;
        }
        return null;
    }

    longitudeMax = () => {
        if (this.props.housingData != null) {
            this.state.longitudeMax = this.props.housingData[0].longitude;
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.state.longitudeMax < parseFloat(this.props.housingData[i].longitude)) {
                    this.state.longitudeMax = parseFloat(this.props.housingData[i].longitude);
                }
            }
            return this.state.longitudeMax;
        }
        return null;
    }

    populationMax = () => {
        if (this.props.housingData != null) {
            this.state.populationMax = this.props.housingData[0].population;
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.state.populationMax < parseFloat(this.props.housingData[i].population)) {
                    this.state.populationMax = parseFloat(this.props.housingData[i].population);
                }
            }
            return this.state.populationMax;
        }
        return null;
    }

    roomsMax = () => {
        if (this.props.housingData != null) {
            this.state.roomsMax = this.props.housingData[0].total_rooms;
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.state.roomsMax < parseFloat(this.props.housingData[i].total_rooms)) {
                    this.state.roomsMax = parseFloat(this.props.housingData[i].total_rooms);
                }
            }
            return this.state.roomsMax;
        }
        return null;
    }

    valueMax = () => {
        if (this.props.housingData != null) {
            this.state.valueMax = this.props.housingData[0].median_house_value;
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.state.valueMax > parseFloat(this.props.housingData[i].median_house_value)) {
                    this.state.valueMax = parseFloat(this.props.housingData[i].median_house_value);
                }
            }
            return this.state.valueMax;
        }
        return null;
    }

    render() {
        //...
        return (
            <Table striped bordered hover size="sm" className="mt-5">
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
                    <MaxDataRecord
                        longitude={this.longitudeMax()}
                        latitude={this.latitudeMax()}
                        age={this.ageMax()}
                        rooms={this.roomsMax()}
                        bedrooms={this.bedsMax()}
                        holds={this.holdsMax()}
                        income={this.incomeMax()}
                        value={this.valueMax()}
                        population={this.populationMax()}
                    />
                </tbody>
            </Table>
        )
    }
}

export default connect(null)(MaxDataTable);