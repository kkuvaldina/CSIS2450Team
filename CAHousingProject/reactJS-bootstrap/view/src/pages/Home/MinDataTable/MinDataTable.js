//React-Bootstrap
import React, { Component } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
//Redux Store Connector
import { connect } from "react-redux";
//Page Components
import MinDataRecord from "./MinDataRecord/MinDataRecord";


class MinDataTable extends Component {

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

    ageMin = () => {
        if (this.props.housingData != null) {
            this.state.ageMin = this.props.housingData[0].housing_median_age;
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.state.ageMin > parseFloat(this.props.housingData[i].housing_median_age)) { 
                    this.state.ageMin = parseFloat(this.props.housingData[i].housing_median_age);
                }
            }
            return this.state.ageMin;
        }
        return null;
    }
    
    bedsMin = () => {
        if (this.props.housingData != null) {
            this.state.bedsMin = this.props.housingData[0].total_bedrooms;
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.state.bedsMin > parseFloat(this.props.housingData[i].total_bedrooms)) {
                    this.state.bedsMin = parseFloat(this.props.housingData[i].total_bedrooms);
                }
            }
            return this.state.bedsMin;
        }
        return null;
    }

    holdsMin = () => {
        if (this.props.housingData != null) {
            this.state.holdsMin = this.props.housingData[0].households;
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.state.holdsMin > parseFloat(this.props.housingData[i].households)) {
                    this.state.holdsMin = parseFloat(this.props.housingData[i].households);
                }
            }
            return this.state.holdsMin;
        }
        return null;
    }

    incomeMin = () => {
        if (this.props.housingData != null) {
            this.state.incomeMin = this.props.housingData[0].median_income;
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.state.incomeMin > parseFloat(this.props.housingData[i].median_income)) {
                    this.state.incomeMin = parseFloat(this.props.housingData[i].median_income);
                }
            }
            return this.state.incomeMin;
        }
        return null;
    }

    latitudeMin = () => {
        if (this.props.housingData != null) {
            this.state.latitudeMin = this.props.housingData[0].latitude;
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.state.latitudeMin > parseFloat(this.props.housingData[i].latitude)) {
                    this.state.latitudeMin = parseFloat(this.props.housingData[i].latitude);
                }
            }
            return this.state.latitudeMin.toFixed(2);
        }
        return null;
    }

    longitudeMin = () => {
        if (this.props.housingData != null) {
            this.state.longitudeMin = this.props.housingData[0].longitude;
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.state.longitudeMin > parseFloat(this.props.housingData[i].longitude)) {
                    this.state.longitudeMin = parseFloat(this.props.housingData[i].longitude);
                }
            }
            return this.state.longitudeMin.toFixed(2);
        }
        return null;
    }

    populationMin = () => {
        if (this.props.housingData != null) {
            this.state.populationMin = this.props.housingData[0].population;
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.state.populationMin > parseFloat(this.props.housingData[i].population)) {
                    this.state.populationMin = parseFloat(this.props.housingData[i].population);
                }
            }
            return this.state.populationMin;
        }
        return null;
    }

    roomsMin = () => {
        if (this.props.housingData != null) {
            this.state.roomsMin = this.props.housingData[0].total_rooms;
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.state.roomsMin > parseFloat(this.props.housingData[i].total_rooms)) {
                    this.state.roomsMin = parseFloat(this.props.housingData[i].total_rooms);
                }
            }
            return this.state.roomsMin;
        }
        return null;
    }

    valueMin = () => {
        if (this.props.housingData != null) {
            this.state.valueMin = this.props.housingData[0].median_house_value;
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.state.valueMin > parseFloat(this.props.housingData[i].median_house_value)) {
                    this.state.valueMin = parseFloat(this.props.housingData[i].median_house_value);
                }
            }
            return this.state.valueMin.toFixed(2);
        }
        return null;
    }

    
    render() {
        const records = this.props.housingData;
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
                    <MinDataRecord
                        longitude={this.longitudeMin()}
                        latitude={this.latitudeMin()}
                        age={this.ageMin()}
                        rooms={this.roomsMin()}
                        bedrooms={this.bedsMin()}
                        holds={this.holdsMin()}
                        income={this.incomeMin()}
                        value={this.valueMin()}
                        population={this.populationMin()}
                    />
                </tbody>
            </Table>
        )
    }
}

export default connect(null)(MinDataTable);