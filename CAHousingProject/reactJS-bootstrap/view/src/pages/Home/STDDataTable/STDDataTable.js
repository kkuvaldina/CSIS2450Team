//React-Bootstrap
import React, { Component } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
//Redux Store Connector
import { connect } from "react-redux";
//Page Components
import STDDataRecord from "./STDDataRecord/STDDataRecord";


class STDDataTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            longitudeSTD: 0,
            latitudeSTD: 0,
            ageSTD: 0,
            roomsSTD: 0,
            bedsSTD: 0,
            holdsSTD: 0,
            incomeSTD: 0,
            valueSTD: 0,
            populationSTD: 0,
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
            //this.state.ageSTD = this.props.housingData[0].housing_median_age;
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if(this.props.housingData[i].housing_median_age != "")
                this.state.ageSTD += parseFloat(this.props.housingData[i].housing_median_age);
            }

            console.log(typeof this.state.ageSTD);
            console.log(typeof parseFloat(this.props.housingData[0].housing_median_age));

            let mean = parseFloat(this.state.ageSTD) / this.countRecords();
            let total = 0;
            let temp = 0;
            let x = 0;

            console.log(typeof this.state.ageSTD);
            console.log(typeof mean);
            console.log(typeof temp);
            console.log(typeof total);
            console.log(typeof x);
            
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                x = parseFloat(Math.pow(this.props.housingData[i] - mean), 2);                
                total += x;
            }


            temp = total / this.countRecords();
            let square = Math.sqrt(temp);

            console.log(typeof this.state.ageSTD);
            console.log(typeof mean);
            console.log(typeof temp);
            console.log(typeof total);            
            console.log(typeof x);            
            console.log(typeof square);

            return square;

        }
        return null;
    }

    bedsSTD = () => {
        if (this.props.housingData != null) {

            this.state.bedsSTD = this.props.housingData[0].total_bedrooms;
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.state.bedsSTD > parseFloat(this.props.housingData[i].total_bedrooms)) {
                    this.state.bedsSTD = parseFloat(this.props.housingData[i].total_bedrooms);
                }
            }
            return this.state.bedsSTD;
        }
        return null;
    }

    holdsSTD = () => {
        if (this.props.housingData != null) {
            this.state.holdsSTD = this.props.housingData[0].households;
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.state.holdsSTD > parseFloat(this.props.housingData[i].households)) {
                    this.state.holdsSTD = parseFloat(this.props.housingData[i].households);
                }
            }
            return this.state.holdsSTD;
        }
        return null;
    }

    incomeSTD = () => {
        if (this.props.housingData != null) {
            this.state.incomeSTD = this.props.housingData[0].median_income;
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.state.incomeSTD > parseFloat(this.props.housingData[i].median_income)) {
                    this.state.incomeSTD = parseFloat(this.props.housingData[i].median_income);
                }
            }
            return this.state.incomeSTD;
        }
        return null;
    }

    latitudeSTD = () => {
        if (this.props.housingData != null) {
            this.state.latitudeSTD = this.props.housingData[0].latitude;
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.state.latitudeSTD > parseFloat(this.props.housingData[i].latitude)) {
                    this.state.latitudeSTD = parseFloat(this.props.housingData[i].latitude);
                }
            }
            return this.state.latitudeSTD.toFixed(2);
        }
        return null;
    }

    longitudeSTD = () => {
        if (this.props.housingData != null) {
            this.state.longitudeSTD = this.props.housingData[0].longitude;
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.state.longitudeSTD > parseFloat(this.props.housingData[i].longitude)) {
                    this.state.longitudeSTD = parseFloat(this.props.housingData[i].longitude);
                }
            }
            return this.state.longitudeSTD.toFixed(2);
        }
        return null;
    }

    populationSTD = () => {
        if (this.props.housingData != null) {
            this.state.populationSTD = this.props.housingData[0].population;
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.state.populationSTD > parseFloat(this.props.housingData[i].population)) {
                    this.state.populationSTD = parseFloat(this.props.housingData[i].population);
                }
            }
            return this.state.populationSTD;
        }
        return null;
    }

    roomsSTD = () => {
        if (this.props.housingData != null) {
            this.state.roomsSTD = this.props.housingData[0].total_rooms;
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.state.roomsSTD > parseFloat(this.props.housingData[i].total_rooms)) {
                    this.state.roomsSTD = parseFloat(this.props.housingData[i].total_rooms);
                }
            }
            return this.state.roomsSTD;
        }
        return null;
    }

    valueSTD = () => {
        if (this.props.housingData != null) {
            this.state.valueSTD = this.props.housingData[0].median_house_value;
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                if (this.state.valueSTD > parseFloat(this.props.housingData[i].median_house_value)) {
                    this.state.valueSTD = parseFloat(this.props.housingData[i].median_house_value);
                }
            }
            return this.state.valueSTD.toFixed(2);
        }
        return null;
    }

    render() {

        console.log(typeof this.ageSTD());

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