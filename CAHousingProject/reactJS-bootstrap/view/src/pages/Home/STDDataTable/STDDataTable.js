//React-Bootstrap
import React, { Component } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
//Math Library: https://mathjs.org/docs/reference/functions/std.html
import { std } from 'mathjs'
//Redux Store Connector
import { connect } from "react-redux";
//Page Components
import STDDataRecord from "./STDDataRecord/STDDataRecord";


class STDDataTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            longitudeSTD: [],
            latitudeSTD: [],
            ageSTD: [],
            roomsSTD: [],
            bedsSTD: [],
            holdsSTD: [],
            incomeSTD: [],
            valueSTD: [],
            populationSTD: [],
            OceanProxSTD: null
        }
    }

    countRecords = () => {
        if (this.props.housingData != null) {
            return Object.keys(this.props.housingData).length;
        }
        return null
    }

    ageSTD = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.props.housingData[i].housing_median_age != "")
                    this.state.ageSTD.push(parseFloat(this.props.housingData[i].housing_median_age));
            }
            return std(this.state.ageSTD, "uncorrected");
        }
        return null;
    }

    bedsSTD = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.props.housingData[i].total_bedrooms != "")
                    this.state.bedsSTD.push(parseFloat(this.props.housingData[i].total_bedrooms));
            }
            return std(this.state.bedsSTD, "uncorrected");
        }
        return null;
    }

    holdsSTD = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.props.housingData[i].households != "")
                    this.state.holdsSTD.push(parseFloat(this.props.housingData[i].households));
            }
            return std(this.state.holdsSTD, "uncorrected");
        }
        return null;
    }

    incomeSTD = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.props.housingData[i].median_income != "")
                    this.state.incomeSTD.push(parseFloat(this.props.housingData[i].median_income));
            }
            return std(this.state.incomeSTD, "uncorrected");
        }
        return null;
    }

    latitudeSTD = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.props.housingData[i].latitude != "")
                    this.state.latitudeSTD.push(parseFloat(this.props.housingData[i].latitude));
            }
            return std(this.state.latitudeSTD, "uncorrected");
        }
        return null;
    }

    longitudeSTD = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.props.housingData[i].longitude != "")
                    this.state.longitudeSTD.push(parseFloat(this.props.housingData[i].longitude));
            }
            return std(this.state.longitudeSTD, "uncorrected");
        }
        return null;
    }

    populationSTD = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.props.housingData[i].population != "")
                    this.state.populationSTD.push(parseFloat(this.props.housingData[i].population));
            }
            return std(this.state.populationSTD, "uncorrected");
        }
        return null;
    }

    roomsSTD = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.props.housingData[i].total_rooms != "")
                    this.state.roomsSTD.push(parseFloat(this.props.housingData[i].total_rooms));
            }
            return std(this.state.roomsSTD, "uncorrected");
        }
        return null;
    }

    valueSTD = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.props.housingData[i].median_house_value != "")
                    this.state.valueSTD.push(parseFloat(this.props.housingData[i].median_house_value));
            }
            return std(this.state.valueSTD, "uncorrected");
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
                    <STDDataRecord
                        longitude={this.longitudeSTD()}
                        latitude={this.latitudeSTD()}
                        age={this.ageSTD()}
                        rooms={this.roomsSTD()}
                        bedrooms={this.bedsSTD()}
                        holds={this.holdsSTD()}
                        income={this.incomeSTD()}
                        value={this.valueSTD()}
                        population={this.populationSTD()}
                    />
                </tbody>
            </Table>
        )
    }
}

export default connect(null)(STDDataTable);