//React-Bootstrap
import React, { Component } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
//Redux Store Connector
import { connect } from "react-redux";
//Page Components
import CountDataRecord from "./CountDataRecord/CountDataRecord";


class CountDataTable extends Component {

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

    ageSum = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.ageTotal += parseFloat(this.props.housingData[i].housing_median_age);
            }
            return this.state.ageTotal;
        }
        return null;
    }

    bedsSum = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.bedsTotal += parseFloat(this.props.housingData[i].total_bedrooms);
            }
            return this.state.bedsTotal;
        }
        return null;
    }

    holdsSum = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.holdsTotal += parseFloat(this.props.housingData[i].households);
            }
            return this.state.holdsTotal;
        }
        return null;
    }

    incomeSum = () => {        
        if (this.props.housingData != null) {
            console.log(this.props.housingData[0].median_income);
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.incomeTotal += parseFloat(this.props.housingData[i].median_income);
            }
            return this.state.incomeTotal;
        }
        return null;
    }

    latitudeSum = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.latitudeTotal += parseFloat(this.props.housingData[i].latitude);
            }
            return this.state.latitudeTotal;
        }
        return null;
    }

    longitudeSum = () => {        
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.longitudeTotal += parseFloat(this.props.housingData[i].longitude);
            }
            return this.state.longitudeTotal;
        }
        return null;
    }

    populationSum = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.populationTotal += parseFloat(this.props.housingData[i].population);
            }
            return this.state.populationTotal;
        }
        return null;
    }

    roomsSum = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.roomsTotal += parseFloat(this.props.housingData[i].total_rooms);
            }
            return this.state.roomsTotal;
        }
        return null;
    }

    valueSum = () => {
        if (this.props.housingData != null) {
            for (var i = 0; i <= this.props.housingData.length - 1; i++) {
                this.state.valueTotal += parseFloat(this.props.housingData[i].median_house_value);
            }
            return this.state.valueTotal;
        }
        return null;
    }


    render() {
        const records = this.props.housingData;

        if (records != null) {
            //Start the Sum and Total for the Columns in the CSV.
            this.ageSum();
            this.populationSum();
            this.valueSum();
            this.incomeSum();
            this.holdsSum();
            this.bedsSum();
            this.roomsSum();
            this.longitudeSum();
            this.latitudeSum();            
        }
                
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
                        <th>Ocean Prox</th>
                    </tr>
                </thead>
                <tbody>
                    <CountDataRecord
                        longitude={this.state.longitudeTotal}
                        latitude={this.state.latitudeTotal}
                        age={this.state.ageTotal}
                        rooms={this.state.roomsTotal}
                        bedrooms={this.state.bedsTotal}
                        holds={this.state.holdsTotal}
                        income={this.state.incomeTotal}
                        value={this.state.valueTotal}
                        population={this.state.populationTotal}
                    />
                </tbody>
            </Table>
        )
    }
}

export default connect(null)(CountDataTable);